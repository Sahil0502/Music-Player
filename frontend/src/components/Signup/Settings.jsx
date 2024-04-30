import React from 'react';
import Layout from "../../Layout/Layout";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";

function Settings() {
  return (
    <Layout>
        <Navbar />
        <div className="settings relative inline-block"  >
      <h1>Settings</h1>
      <div className="settings-sections">
        <h2>Language</h2>
        <select>
          <option value="en-GB">English (United Kingdom)</option>
          <option value="es-ES">Spanish (Spain)</option>
          <option value="fr-FR">French (France)</option>
          {/* Add more language options here */}
        </select>
        <p>Changes will be applied after restarting the app.</p>

        <h2>Display</h2>
        <label>
          <input type="checkbox" />
          Show the now-playing panel on click of play
        </label>

        
</div>
</div>
       <Footer/>
    </Layout>
    
  );
}

export default Settings;
