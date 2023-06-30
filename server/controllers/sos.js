
const nodemailer = require("nodemailer");

const sendmail=async(req,res)=>{
    res.send("sending mail")
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'mike53@ethereal.email',
            pass: 'SeZVRgCmS1gEFx2abg'
        }
    });
      // async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"ADITYA PACHAURI 👻" <pictoholic123@gmail.com>', // sender address
      to: "aditya.2125csme1008@kiet.edu", // list of receivers
      subject: "SOS", // Subject line
      text: "Your contact currently need help at this location", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  }
  
  main().catch(console.error);
}





module.exports=sendmail