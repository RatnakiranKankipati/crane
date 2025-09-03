import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create nodemailer transporter
      const transporter = nodemailer.createTransporter({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user:"ita5555558@gmail.com",
          pass:"vmrw vugw cqpj nhai",
        },
      });

      // Email content
      const emailContent = `
        New EOT Crane Automation Inquiry
        
        Name: ${validatedData.firstName} ${validatedData.lastName}
        Email: ${validatedData.email}
        Company: ${validatedData.company}
        Phone: ${validatedData.phone || 'Not provided'}
        Project Type: ${validatedData.projectType}
        
        Requirements:
        ${validatedData.requirements}
        
        ---
        Sent from eotcranedesigner.com
      `;

      // Send email
      await transporter.sendMail({
        from: "ita5555558@gmail.com",
        to: "sales@fdestech.com",
        subject: `New EOT Crane Automation Inquiry from ${validatedData.company}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
      });

      res.json({ success: true, message: "Your inquiry has been sent successfully. We'll respond within 24 hours." });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to send your inquiry. Please try again or contact us directly at sales@fdestech.com" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
