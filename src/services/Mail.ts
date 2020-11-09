import nodemailer from "nodemailer";
import mailConfig from "../config/mail";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default nodemailer.createTransport(mailConfig as SMTPTransport.Options);
