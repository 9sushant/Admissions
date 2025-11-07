// === 1. YOUR GOOGLE SCRIPT API CALL ===
async function submitApplicationApi(formData: any) {
  
  // This is YOUR Google Script URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwM1kA4Y_SoO-03hIhEvXLghdoCKuYChvmw6CWRF3h7uWeaxDS71xui7wFq0xkyttLxOg";

  const data = new FormData();

  // These keys MUST match your Google Sheet headers and Apps Script
  data.append("studentName", formData.studentName || '');
  data.append("email", formData.email || '');
  data.append("parentName", formData.parentName || '');
  data.append("classSeeking", formData.classSeeking || '');
  data.append("locality", formData.locality || '');
  data.append("mobileNumber", formData.mobileNumber || '');

  const response = await fetch(SCRIPT_URL, {
    method: "POST",
    body: data,
  });

  if (response.ok) {
    const result = await response.json();
    if (result.result === "success") {
      return { success: true };
    } else {
      // This will catch errors *from* the script
      throw new Error(result.message || "An error occurred in the script.");
    }
  } else {
    // This will catch network errors (like 404, 500)
    throw new Error(`Network error: ${response.statusText}`);
  }
}

// === 2. THE NEW ERROR CARD COMPONENT ===
interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
  isRetrying: boolean;
}

const SubmissionFailedCard: React.FC<ErrorDisplayProps> = ({ message, onRetry, isRetrying }) => {
  return (
    <div className="rounded-lg bg-gray-800 p-8 shadow-xl text-center">
      {/* This icon is from your 'Icons.tsx' file */}
      <XCircleIcon className="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h3 className="mt-4 text-2xl font-bold text-red-400">Submission Failed</h3>
      {/* We show the *real* error message here */}
      <p className="mt-2 text-gray-300">{message}</p>
      
      <button 
        onClick={onRetry} 
        disabled={isRetrying}
        className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isRetrying ? 'Retrying...' : 'Try Again'}
      </button>

      <p className="mt-4 text-sm text-gray-400">
        If this problem continues, please contact the admissions office
        at admissions@dalimss.com for assistance.
      </p>
    </div>
  );
};

// === 3. YOUR NEW, SMARTER ADMISSION FORM ===
export const AdmissionForm = forwardRef<HTMLElement>((props, ref) => {
  
  // --- STATE MANAGEMENT ---
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // --- FORM DATA STATE ---
  // This holds the form data so we can retry without re-typing
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    parentName: '',
    classSeeking: '',
    locality: '',
    mobileNumber: '',
  });

  // Helper function to update form data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- SUBMISSION LOGIC ---
  const handleSubmission = useCallback(async (). => {
    setSubmissionState('submitting');
    setErrorMessage('');

    try {
      // We pass our state `formData` to the API
      const result = await submitApplicationApi(formData);
      if (result.success) {
        setSubmissionState('success');
      } else {
        throw new Error('An unknown submission error occurred.');
      }
    } catch (err: any) {
      console.error('Submission failed:', err);
      setSubmissionState('error');
      // Set a user-friendly error message
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  }, [formData]); // This function depends on the `formData` state

  // --- RENDER LOGIC ---

  // 1. Show the Error Card
  if (submissionState === 'error') {
    return (
      <Section ref={ref} className="bg-gray-950">
        <SubmissionFailedCard 
          message={errorMessage}
          onRetry={handleSubmission} // The "Try Again" button now re-runs the submission!
          isRetrying={submissionState === 'submitting'}
        />
      </Section>
    );
  }

  // 2. Show the Success Message
  if (submissionState === 'success') {
    return (
      <Section ref={ref} className="bg-gray-950">
        <div className="text-center py-10 max-w-2xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-300">Your enquiry has been submitted. Our team will contact you shortly.</p>
        </div>
      </Section>
    );
  }

  // 3. Show the Form (default 'idle' state)
  return (
    <Section ref={ref} className="bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Apply Now For Admissions 2025–26</h2>
        <div className="mt-8 bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-lg">
          <form 
            onSubmit={(e) => {
              e.preventDefault(); // Stop page reload
              handleSubmission();
            }}
            className="space-y-6"
          >
            {/* These are now "controlled components". 
              The 'name' prop MUST match the keys in your Apps Script and formData state.
            */}

            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-300 mb-1">Parent Name</label>
              <input 
                type="text" 
                id="parentName" 
                name="parentName" // Matches 'parentName'
                value={formData.parentName}
                onChange={handleInputChange}
                placeholder="Enter parent's full name" 
                required 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-300 mb-1">Student Name</label>
              <input 
                type="text" 
                id="studentName" 
                name="studentName" // Matches 'studentName'
                value={formData.studentName}
                onChange={handleInputChange}
                placeholder="Enter student's full name" 
                required 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="classSeeking" className="block text-sm font-medium text-gray-300 mb-1">Class seeking admission</label>
              <input 
                type="text" 
                id="classSeeking" 
                name="classSeeking" // Matches 'classSeeking'
                value={formData.classSeeking}
                onChange={handleInputChange}
                placeholder="e.g., Nursery, Class 5" 
                required 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-300 mb-1">Mobile Number</label>
              <input 
                type="tel" 
                id="mobileNumber" 
                name="mobileNumber" // Matches 'mobileNumber'
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Enter your 10-digit mobile number" 
                required 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" // Matches 'email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com" 
                required 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="locality" className="block text-sm font-medium text-gray-300 mb-1">Area / Locality</label>
              <input 
                type="text" 
                id="locality" 
                name="locality" // Matches 'locality'
                value={formData.locality}
                onChange={handleInputChange}
                placeholder="Enter your area or locality" 
                required 
                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button 
              type="submit" 
              disabled={submissionState === 'submitting'}
              className="w-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition duration-300 disabled:bg-blue-800 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {submissionState === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
});
AdmissionForm.displayName = 'AdmissionForm';
