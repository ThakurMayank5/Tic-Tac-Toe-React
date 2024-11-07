import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import Font Awesome icons if using react-icons

export default function Footer() {
  return (
    <footer className="container mx-auto text-center py-4">
      <p className="text-sm">
        Created by <strong>Mayank Singh</strong>
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        {/* LinkedIn Link with Icon */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 flex items-center"
        >
          <FaLinkedin className="mr-1" /> LinkedIn
        </a>
        {/* GitHub Link with Icon */}
        <a
          href="https://github.com/thakurmayank5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 flex items-center"
        >
          <FaGithub className="mr-1" /> GitHub
        </a>
      </div>
    </footer>
  )
}
