import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your email provider
    auth: {
        user: process.env.EMAIL, // Sending email
        pass: process.env.EMAIL_PASS, // Email's password or app password
    },
});

export const sendEmail = async ({fullname, email, phone}: {fullname: string, email: string, phone: string }) => {
    const mailOptions = {
        from: process.env.EMAIL,
        email,
        subject: 'New Booking',
        text: HTML(fullname, email, phone)
    };

    return transporter.sendMail(mailOptions);
};


function HTML(fullname: string, email: string, phone: string) {
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