# Privacy Policy for SiteSync (HubSpot Integration)
**Effective Date:** 09 January 2026  
**Last Updated:** 09 January 2026

SiteSync ("we", "us", or "our") provides a construction management integration for the HubSpot CRM platform. This Privacy Policy describes how we collect, process, and protect data when you use the SiteSync HubSpot App (the "App").

## 1. Data Processing Philosophy
SiteSync is built on a **"Zero-Persistence"** architecture. We do not maintain a permanent, independent database of your HubSpot CRM data. All site logs, labor entries, and compliance records are stored directly within your HubSpot instance using Custom Objects.

## 2. Information We Collect and Process
To provide our services, the App processes the following categories of data:

### A. Customer-Provided CRM Data
* **Construction Site Logs:** Textual notes, weather data, and timestamps.
* **Labor & Subcontractor Data:** Names, UTR numbers, and CIS (Construction Industry Scheme) verification statuses.
* **Media:** Photos uploaded via the Site Diary interface.

### B. Automatically Collected Data
* **HubSpot Portal ID:** To verify your subscription status.
* **Usage Metadata:** Logged events for troubleshooting (e.g., function execution success/failure).

## 3. UK-Specific Compliance Features
### A. CIS (Construction Industry Scheme)
We process subcontractor data solely to verify compliance against HMRC-style logic within your CRM. We do not transmit this data to any third party other than the necessary HubSpot APIs required for your workflow.

### B. GDPR & Biometric Data (Photo Handling)
In compliance with UK GDPR, SiteSync includes an automated face-detection and blurring tool. 
* **Processing:** Images are processed in a volatile serverless environment to detect faces. 
* **Consent Logic:** If a face is detected and no consent record is found in your HubSpot Contact database, the image is blurred before being saved to your HubSpot File Manager.
* **Retention:** We do not store raw, unblurred images on our servers after the processing handshake is complete.

## 4. Third-Party Processors
To function, SiteSync utilizes the following sub-processors:
* **HubSpot, Inc:** For data storage and UI rendering (Data is held in your own HubSpot portal).
* **Vercel / AWS:** For hosting serverless OAuth and AI processing logic (UK/EU regions prioritized).
* **Stripe:** For subscription billing and payment processing.

## 5. Your Rights (UK GDPR)
Under the UK General Data Protection Regulation, you and your users have the following rights:
* **Right to Access:** You can access all SiteSync data directly within your HubSpot Custom Objects.
* **Right to Erasure:** Deleting the SiteSync App or the custom records in HubSpot removes the data from the system.
* **Right to Restrict Processing:** You can disable the AI Agent or Photo-Blurring features in the App Settings.

## 6. Data Residency
All serverless processing occurs in **UK-South** or **EU-West** data centers to minimize latency and ensure compliance with UK data sovereignty standards.

## 7. Contact Us
For any privacy-related queries or to exercise your data rights, please contact:
**Email:** support@wu=tec.co.uk