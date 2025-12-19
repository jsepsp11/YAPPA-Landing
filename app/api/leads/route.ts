import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_RRo9h1A3_EA2XDcfZppY1eUP1h6mgUxnW');

// Emails destino
const RECIPIENT_EMAILS = ['jsepsp@gmail.com', 'dgaraicoa@hotmail.com'];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, tienda, email, telefono } = body;

    // Validar campos requeridos
    if (!nombre || !tienda || !email || !telefono) {
      return NextResponse.json({ error: 'Todos los campos son requeridos' }, { status: 400 });
    }

    // Crear el contenido del email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #082E72, #00D2FF); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">YAPPA</h1>
          <p style="color: #00D2FF; margin: 5px 0 0 0;">Nuevo Lead Registrado</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #082E72; border-bottom: 1px solid #eee;">Nombre:</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #082E72; border-bottom: 1px solid #eee;">Negocio:</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${tienda}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #082E72; border-bottom: 1px solid #eee;">Email:</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #00D2FF;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #082E72;">WhatsApp:</td>
              <td style="padding: 12px;"><a href="https://wa.me/${telefono.replace(/\D/g, '')}" style="color: #00D2FF;">${telefono}</a></td>
            </tr>
          </table>
        </div>
        
        <div style="background: #082E72; padding: 15px; text-align: center;">
          <p style="color: #aaa; font-size: 12px; margin: 0;">
            Lead generado desde yappaec.com.ec<br/>
            ${new Date().toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })}
          </p>
        </div>
      </div>
    `;

    // Enviar email a ambos correos
    const { data, error } = await resend.emails.send({
      from: 'YAPPA Leads <leads@yappaec.com.ec>',
      to: RECIPIENT_EMAILS,
      subject: `🆕 Nuevo Lead: ${tienda} - ${nombre}`,
      html: emailContent,
      replyTo: email, // Para poder responder directamente al lead
    });

    if (error) {
      console.error('Error Resend:', JSON.stringify(error));
      // Guardar lead localmente como backup aunque falle el email
      console.log('LEAD BACKUP:', JSON.stringify({ nombre, tienda, email, telefono, fecha: new Date().toISOString() }));
      return NextResponse.json({ 
        success: true, 
        message: 'Registro guardado. Te contactaremos pronto.',
        emailSent: false 
      });
    }

    return NextResponse.json({ success: true, data, emailSent: true });
  } catch (error) {
    console.error('Error en API:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
