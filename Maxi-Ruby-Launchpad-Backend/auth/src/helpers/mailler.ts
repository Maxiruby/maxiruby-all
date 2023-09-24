import nodemailer, { createTransport } from "nodemailer";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";

const EMAIL = "muzman@beersolution.io";
const MAILING_ID =
  "971738052246-7o166m5c19iks63grelti0dsl9cl5t70.apps.googleusercontent.com";
const MAILING_REFRESH =
  "1//04UVFbnr5fs5SCgYIARAAGAQSNwF-L9Ir2kgCOP0jdZSbAa6sytcymgW4s0-SvATj55k1cNxU0QwIsWhpuIp9FGZWCYWup0YPr0Y";
const MAILING_SECRET = "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";
const MAILING_ACCESS =
  "ya29.a0AfB_byAgQr69wB9WZedS0amzyEGC_r9-nfrwBSkVFctBUUMEMQp6KXmCKxhIQmsMWurZmsDXuuf5RWZ6JczYDN-mxULa3P-xTMhhXWOgEs7OcbT7e3rBWMpv6sqrV1mB1KTEINl5HGRDKu7dI9UFi21fzzfCoNUJxYK4aCgYKAfoSARESFQGOcNnC9r_17Ncu9LYLg7IryR3Hzw0171 ";
const oauth2Client = new google.auth.OAuth2(
  MAILING_ID!,
  MAILING_SECRET!,
  "https://developers.google.com/oauthplayground"
);

const sendVerificationEmail = async (
  email: string,
  name: string,
  url: string
): Promise<void> => {
  try {
    oauth2Client.setCredentials({
      refresh_token: MAILING_REFRESH!,
    });

    const accessToken = await oauth2Client.getAccessToken();
    console.log(accessToken);

    const smtpTransport = nodemailer.createTransport({
      //@ts-ignore
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL!,
        clientId: MAILING_ID!,
        clientSecret: MAILING_SECRET!,
        refreshToken: MAILING_REFRESH!,
        accessToken,
      },
    });

    const mailOptions = {
      from: EMAIL!,
      to: email,
      subject: "Maxiruby email verification",
      html: `  <div
      style="
        max-width: 700px;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: Roboto;
        font-weight: 600;
        color: #ebde14;
      "
    >
      <div style="background-color: #141823">
        <img
          src="https://res.cloudinary.com/dhfc9mwrm/image/upload/v1695394163/favicon_ow6zeb.svg"
          alt=""
          style="width: 100px"
        />
      </div>
      <span>Action requise : Activate your Maxiruby account</span>
    </div>
    <div
      style="
        padding: 1rem 0;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        color: #141823;
        font-size: 17px;
        font-family: Roboto;
      "
    >
      <span>Hello ${name}</span>
      <div style="padding: 20px 0">
        <span style="padding: 1.5rem 0"
          >You recently created an account on Maxiruby. To complete your
          registration, please confirm your account.</span
        >
      </div>
      <a
        href="${url}"
        style="
          width: 200px;
          padding: 10px 15px;
          background: #ebde14;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        "
        >Confirm your account</a
      ><br />
      <div style="padding-top: 20px">
        <span style="margin: 1.5rem 0; color: #ebde14"
          >Maxiruby allows you to stay in touch with all your friends, once
          registered on Maxiruby, you can share photos, organize events and much
          more.</span
        >
      </div>
    </div>`,
    };

    await smtpTransport.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendVerificationEmail;
