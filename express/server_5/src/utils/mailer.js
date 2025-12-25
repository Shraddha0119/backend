import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
   service:"gmail",
    auth:{
        user: process.env.useremail,
        pass: process.env.userpass
    },
});

// verify transporter//
transporter.verify((error)=>{
    if(error) console.log("Smtp error ❌",error.message);
    else console.log("smtp ready✔️");
    });

const sendMail = async({to,subject,html})=>{
    await transporter.sendMail({
        from: process.env.useremail,
        to,
        subject,
        html
    });
}
export default sendMail;
