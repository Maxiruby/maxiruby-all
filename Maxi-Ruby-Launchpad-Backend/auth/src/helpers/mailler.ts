import nodemailer, { createTransport } from "nodemailer";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";

const EMAIL = "admin@maxiruby.com";
const MAILING_ID =
  "169554318369-33et9k7eo1ueek0ds00mr7j8eh6ejunq.apps.googleusercontent.com";
const MAILING_REFRESH =
  "1//04maJvfOljMaxCgYIARAAGAQSNwF-L9Irh-s5Dl3lBidw1_tLaXP4JXMgZIu4U2lomR3HFzF9sZnzn7fiYaNC7PlOvD5a61GlAnY";
const MAILING_SECRET = "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";
const MAILING_ACCESS =
  "ya29.a0AfB_byB1reMIFogYC-JnwFCozb2lFpFUTi3YB_eh-ZC6WhWH3aoI79C8d0gzeFruzJseoM7o6F0Wrv38ZtDJntYO8LkSAYQlDspAHS97b9AYB20X7AAlmc5Ljj2z_Azf3BwavkaRALmHMOPfmqSqzOanLb_6HW05lQfPaCgYKAaUSARISFQGOcNnCa94x4xct61RhshI-Xu3g0Q0171 ";
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
