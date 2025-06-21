import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const iconStyle = "text-[#D4A5A5] hover:text-pink-300 transition-colors duration-300";

  return (
    <div>
      <div className="contact-header">
        <h1 className="text-[36px] font-bold font-space-grotesk text-[#D4A5A5] text-center">
          Contact Me
        </h1>
        <h2 className="text-2xl font-bold font-space-grotesk text-[#2E7C67] text-center">
          Thanks for getting to know me! I would love to get to know you. Let's connect!
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          {/* GitHub */}
          <a 
            href="https://github.com/londonjones4189" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub size={40} className={iconStyle} />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/london--jones/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={40} className={iconStyle} />
          </a>

          {/* Email */}
          <a 
            href="mailto:londonjonez00@gmail.com" 
            aria-label="Send Email"
          >
            <MdEmail size={40} className={iconStyle} />
          </a>
        </div>
      </div>

      <div className="Form-header mt-6">
        <h2 className="text-2xl font-bold font-space-grotesk text-[#2E7C67] text-center mb-4">
          Fill out this form to leave feedback on this website and portfolio pieces!
        </h2>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSffe-JmS45EH59LnDk3d157ED08p6gXGQjLXf_R-TBHHWMAvA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E7C67]/[0.17] !text-[#2E7C67] px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Click Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
