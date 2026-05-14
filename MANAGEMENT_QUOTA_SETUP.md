# Management Quota Enquiry Form - Google Sheets Integration Setup

## Overview
The "Apply online for Management Quota Seats" form has been integrated to save submissions to a Google Sheet.

## Files Modified
- `src/pages/AdmissionPage.tsx` - Added form state management and submit handler
- `google-apps-script-management-quota.gs` - Google Apps Script for handling submissions

## Setup Instructions

### Step 1: Open Your Google Sheet
1. Go to: https://docs.google.com/spreadsheets/d/1R352BBKJ0joCzRkBysw0wpHwSjciDfnhjy7RGnMPJww/edit?gid=0#gid=0
2. Make sure the sheet name is "Sheet1" (or update the script if different)

### Step 2: Open Google Apps Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code
3. Copy the contents of `google-apps-script-management-quota.gs` from this project
4. Paste it into the Apps Script editor

### Step 3: Set Up Sheet Headers
1. In the Apps Script editor, select the `setupSheet` function from the toolbar
2. Click **Run**
3. Grant the necessary permissions when prompted
4. This will create headers in your sheet:
   - Name of the Applicant
   - Programme
   - Mobile Number
   - Address
   - Total Marks Obtained
   - Stream
   - Last Institution Studied
   - Enquiry Date
   - Enquiry Time

### Step 4: Deploy as Web App
1. In the Apps Script editor, click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) and select **Web app**
3. Configure:
   - **Description**: "Management Quota Enquiry Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (required for form submissions)
4. Click **Deploy**
5. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

### Step 5: Update the Form Code
1. Open `src/pages/AdmissionPage.tsx`
2. Find line 43: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace with your deployed Web App URL:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```

### Step 6: Test the Form
1. Start your development server
2. Navigate to the Admission page
3. Fill out the Management Quota Enquiry form
4. Submit the form
5. Check your Google Sheet for the new entry

## Important Notes

### CORS Issues
Google Apps Script may have CORS issues. If you encounter errors, the form will display an error message. The data should still be saved to the sheet.

### Sheet Permissions
- Ensure your Google Sheet is shared with "Anyone with the link can view" if you want others to access the data
- The Web App deployment with "Anyone" access allows the form to submit without authentication

### Form Fields Mapping
The form fields map to sheet columns as follows:
- applicantName → Name of the Applicant
- programme → Programme
- mobileNumber → Mobile Number
- address → Address
- totalMarks → Total Marks Obtained
- stream → Stream
- lastInstitution → Last Institution Studied
- enquiryDate → Enquiry Date (auto-generated)
- enquiryTime → Enquiry Time (auto-generated)

### Troubleshooting
- If submissions aren't appearing, check the Apps Script execution log
- Ensure the Web App URL is correct
- Verify the sheet name matches "Sheet1" in the script
- Make sure you've granted all necessary permissions to the Apps Script
