const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    const { receiver } = req.body;
    // Create a transporter using your Gmail account
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use Gmail service
        auth: {
            user: 'surendraexperiment@gmail.com', // Your Gmail address
            pass: 'drcg pheh idtk xqxd',    // Your Gmail app password (if 2-Step Verification is on, use App Password)
        },
    });

    // Sending email
    let info = await transporter.sendMail({
        from: '"OTP Sender" <surendraexperiment@gmail.com>', // sender address
        to: receiver, // list of receivers
        subject: "OTP CODE", // Subject line
        text: "Hello There", // plain text body
        html: "<b>Your secret key is</b>: <h1>231524</h1> Please donot share with anyone. Thankyou", // html body
    });

    console.log("Message sent: %s", info.messageId);

    // Send response
    res.json({ success: true, message: "mail sent" });
};

module.exports = sendMail;
