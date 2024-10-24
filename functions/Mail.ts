import nodemailer from "nodemailer";

const EMAIL = process.env.EMAIL
const EMAIL_PASS = process.env.EMAIL_PASS

const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your email provider
    auth: {
        user: EMAIL, // Sending email
        pass: EMAIL_PASS, // Email's password or app password
    },
});

export const sendBookingEmailNotification = async ({fullname, email, phone}: {fullname: string, email: string, phone: string }) => {
    const mailOptions = {
        from: EMAIL,
        to:
        email,
        subject: 'New Booking',
        text: HTMLBooking(fullname, email, phone)
    };

    return transporter.sendMail(mailOptions);
};
export const sendEmailVerificationCode = async (email: string, code: string) => {
    const mailOptions = {
        from: EMAIL,
        to:email,
        subject: 'Email Verification',
        html: HTMLEmailVerification(code)
    };

    return transporter.sendMail(mailOptions);
};
export const sendLoginVerificationCode = async (email: string, code: string) => {
    const mailOptions = {
        from: EMAIL,
        to:email,
        subject: 'Login Verification',
        html: HTMLLoginVerification(code)
    };

    return transporter.sendMail(mailOptions);
};




function HTMLBooking(fullname: string, email: string, phone: string) {
    const html = `
     <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Booking</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .email-container {
            background-color: white;
            width: 400px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
        }

        .email-container h1 {
            font-size: 20px;
            color: #333;
            margin-bottom: 20px;
        }

        .email-container p {
            font-size: 14px;
            color: #555;
            line-height: 1.5;
        }

        .verification-code {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin: 20px 0;
        }

        .reset-button {
            display: inline-block;
            background-color: #0498dd;
            color: white;
            padding: 10px 20px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            border-radius: 5px;
            text-decoration: none;
            margin: 20px 0;
        }

        .reset-button:hover {
            background-color: #1eb3f8;
        }

        .warning-text {
            font-size: 12px;
            color: #888;
        }

        .footer {
            font-size: 12px;
            color: #999;
            margin-top: 30px;
            text-align: center;
        }

        .footer a {
            color: #007bff;
            text-decoration: none;
        }

        .highlight {
            background-color: #ffea8a;
            padding: 2px 4px;
            border-radius: 3px;
            font-weight: bold;
        }

        .icon {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 50%;
            display: inline-block;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="email-container">
            <!-- Placeholder for the icon -->
            <div class="icon">
                <!-- <img src="https://devchat.tanelt.com/assets/logo-DsjE9eHb.webp" height="20" alt="Help Icon"> -->
            </div>

            <h1>Action Required: New Booking</h1>
            <p>
                You are receiving this email because a booking was made on your Eco-Tourism website.
            </p>

            <h2>User Details</h2>
            <p>
                Full Name: ${fullname}
            </p>
            <p>
                Email: ${email}
            </p>
            <p>
                Phone: ${phone}
            </p>

            <div class="footer">
                <p></p>
            </div>
        </div>
    </div>

</body>

</html>`
    
    return html
}

function HTMLEmailVerification(code: string) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .email-container {
            background-color: #fffcfc;
            color: #000000;
            width: 400px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            text-align: left;
        }

        h1 {
            font-size: 20px;
            color: black;
            margin-bottom: 20px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: #505050;
        }

        .verify-button {
            display: inline-block;
            color: #0498dd;
            padding: 10px 20px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            border-radius: 5px;
            text-decoration: none;
            margin: 20px 0;
        }


        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #888;
            text-align: center;
        }

        .footer a {
            color: #888;
            text-decoration: none;
        }

        .footer p {
            margin: 5px 0;
        }

        .icon {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 50%;
            display: inline-block;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>

    <div class="email-container">
        <div class="icon">
            
        </div>
        <h1>Account Verification</h1>
        <p>Howdy,</p>
        <p>Thank you for choosing Eco-tourism! Please confirm your email address by pasting the digits below in the signup form. We'll
            communicate important updates with you from time to time via email, so it's essential that we have an
            up-to-date email address on file.</p>

        <p class="verify-button">${code}</p>

        <p>If you did not sign up for an Eco-tourism account, you can simply disregard this email.</p>

        <p>Thank you once again!</p>

        <p>Luqman Shaban</p>

        <div class="footer">
            <p>Problems or questions?</p>
            <p><a href="mailto:luqmanshaban02@gmail.com">Contact Us</a></p>
            <p>This message was sent from <span class="highlight"></span><a
                    href="https://Eco-tourism.vercel.app">Eco-tourism</a></p>
        </div>
    </div>

</body>

</html>`
}


function HTMLLoginVerification(code: string) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One-Time Verification Code</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .email-container {
            background-color: white;
            width: 400px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
        }

        .email-container h1 {
            font-size: 20px;
            color: #333;
            margin-bottom: 20px;
        }

        .email-container p {
            font-size: 14px;
            color: #555;
            line-height: 1.5;
        }

        .verification-code {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin: 20px 0;
        }

        .warning-text {
            font-size: 12px;
            color: #888;
        }

        .footer {
            font-size: 12px;
            color: #999;
            margin-top: 30px;
            text-align: center;
        }

        .footer a {
            color: #007bff;
            text-decoration: none;
        }

        .highlight {
            background-color: #ffea8a;
            padding: 2px 4px;
            border-radius: 3px;
            font-weight: bold;
        }

        .icon {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 50%;
            display: inline-block;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>

    <div class="container">
        <div class="email-container">
            <!-- Placeholder for the icon -->
            <div class="icon">
                <img src="https://devchat.tanelt.com/assets/logo-DsjE9eHb.webp" height="20" alt="Help Icon">
            </div>

            <h1>Action Required: One-Time Verification Code</h1>
            <p>
                You are receiving this email because a request was made for a one-time code that can be used for
                authentication.
            </p>

            <div class="verification-code">
                ${code}
            </div>

            <p>
                If you did not request this change, please change your password
            </p>

            <div class="footer">
                <p>This message was sent from <span class="highlight">Eco-tourism</p>
            </div>
        </div>
    </div>

</body>

</html>`;
}

