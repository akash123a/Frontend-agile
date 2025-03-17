const Footer = () => {
    return (
      <footer className="bg-gray-100 p-6 text-left">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li>Careers</li>
              <li>Events</li>
              <li>Blogs</li>
              <li>Investor Relations</li>
              <li>Atlassian Foundation</li>
              <li>Contact us</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">PRODUCTS</h3>
            <ul>
              <li>Rovo</li>
              <li>Jira</li>
              <li>Jira Align</li>
              <li>Jira Service Management</li>
              <li>Confluence</li>
              <li>Trello</li>
              <li>Bitbucket</li>
              <li>See all products</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">RESOURCES</h3>
            <ul>
              <li>Technical support</li>
              <li>Purchasing & licensing</li>
              <li>Atlassian Community</li>
              <li>Knowledge base</li>
              <li>Marketplace</li>
              <li>My account</li>
              <li>Create support ticket</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold mb-2">LEARN</h3>
            <ul>
              <li>Partners</li>
              <li>Training & certification</li>
              <li>Documentation</li>
              <li>Developer resources</li>
              <li>Enterprise services</li>
              <li>See all resources</li>
            </ul>
          </div>
        </div>
  
        <div className="max-w-6xl mx-auto mt-6 flex flex-wrap justify-between items-center">
          <div>Copyright &copy; 2025 Team Ignited Minds </div>
          <div>
            <a href="/privacy" className="mr-4">Privacy policy</a>
            <a href="/terms" className="mr-4">Terms</a>
            <a href="/impressum">Impressum</a>
          </div>
          <div>
            <select className="p-1 border rounded">
              <option value="en">English</option>
              <option value="en">Hindi</option>
            </select>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  