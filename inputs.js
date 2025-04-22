/* 
Step 7: Connecting EmailOctopus and Calendly to your website
- Add your EmailOctopus and Calendly links between the quotation marks '' below
*/
const emailOctopusScript = '<script async src="https://eocampaign1.com/form/883f739e-96c6-11ef-b044-97ac65458fd5.js" data-form="883f739e-96c6-11ef-b044-97ac65458fd5"></script>'

const calendlyLink = 'https://10000internsfoundation.com'


/*
Step 8: Adding your logo
*/
const logoFileName = 'logo.png'


/*
Step 9: Website Content and Branding
- Here we will outline how we want the website to look like
- To do this we will be using HEX codes which we discussed in Step 4  
- Below you can see the HEX codes for the colors white and black

White HEX color code: #FFFFFF
Black HEX color code: #000000
*/

// HIGH PRIORITY CHANGES
// 2. Change project name and colours:
const companyName = '10,000 ABLE INTERNS'
const companyNameColor = '#3FC28E'

const formButtonBackgroundColor = '#3FC28E'
const formButtonTextColor = '#FFFFFF' // Make this either black (#000000) or white (#FFFFFF) depending on what is easiest to read on your button color of choice

// 3. Update social media links:
const facebookLink = ''
const instagramLink = ''
const xLink = ''
const linkedinLink = ''
const youtubeLink = ''
const tiktokLink = ''
const discordLink = ''

// 4. Update header and description texts:
const headerText = '10KAI is on pause this year, but we\'ll be back.' // One-line description of what you will offer customers
const descriptionText = '300 paid internships later, we\'ve learnt a lot, and we\'ve got some refining to do. Returning with a new programme in 2025.' // More detailed description of what you will offer customers

const headerTextSize = '66' // Default size is 66
const descriptionTextSize = '32' // Default size is 32

// 5. Update contact email:
const contactEmail ='sami@10000internsfoundation.com'



// LOW PRIORITY CHANGES
// Branding: Update with different background and text colors if needed
const pageBackgroundColor = '#FFFFFF'
const pageTextColor = '#000000'
const formTextColor = '#000000'

// Social media: Update the call to action with your own
const socialMediaCallToAction = 'Find us on social media'

// Waitlist: Update the call to action with your own
const waitlistCallToAction = 'Join the waitlist'

// Calendly: Update the calls to action with your own
const meetingCallToAction = 'Our work so far:'
const meetingButtonText = 'Take me to The 10,000 Interns Foundation'



// LOWEST PRIORITY CHANGES (For special cases)
// Forms: Change if it does not fit with your new background color
const formBackgroundColor = '#FFFFFF'
const formBorderColor = '#CCC'

// Social media: Change the colors if they do not fit with your new background color
const facebookLogoColor = '#4267B2'
const instagramLogoColor = '#E1306C'
const xLogoColor = '#000000'
const linkedinLogoColor = '#0077b5'
const youtubeLogoColor = '#FF0000'
const tiktokLogoColor = '#000000'
const discordLogoColor = '#5865F2'
























// Ignore the below code. It allows us to use the variables you have defined.
function splitScript(script) {
    const srcMatch = script.match(/src="([^"]+)"/);
    const dataFormMatch = script.match(/data-form="([^"]+)"/);

    const waitlistFormScriptSrc = srcMatch ? srcMatch[1] : null;
    const waitlistFormScriptDataForm = dataFormMatch ? dataFormMatch[1] : null;

    return {
        waitlistFormScriptSrc,
        waitlistFormScriptDataForm
    };
}

const { waitlistFormScriptSrc, waitlistFormScriptDataForm } = splitScript(emailOctopusScript);
