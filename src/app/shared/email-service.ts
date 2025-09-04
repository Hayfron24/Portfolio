import { Injectable } from "@angular/core";
import emailjs, { type EmailJSResponseStatus } from "@emailjs/browser";
import { environment } from "../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  sendEmail(email: string) {
    const serviceID = environment.serviceID;
    const templateID = environment.templateID;
    const templateParams = {
      user_email: email,
      to_email: email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, {
        publicKey: environment.publicKey,
      })
      .then(() => console.log("Email sent successfully", templateParams))
      .catch((error: EmailJSResponseStatus) =>
        console.error("Error sending email:", error)
      );
  }
}
