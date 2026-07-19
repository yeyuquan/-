import { contact } from '../data/portfolio'

export function Contact() {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />
      <div className="container contact-inner">
        <div className="section-head"><p className="eyebrow"><span />04 / CONTACT</p><p className="section-index">OPEN FOR<br />COLLABORATION</p></div>
        <div className="contact-main">
          <p>下一场现场，<br />从一次对话开始。</p>
          <h2 id="contact-title">KEEP IN<br /><em>TOUCH.</em></h2>
          <a className="contact-mail" href={`mailto:${contact.email}`}>{contact.email}<b>↗</b></a>
        </div>
        <div className="contact-bottom">
          <a href={`tel:${contact.phone}`}>+86 {contact.phone.slice(0, 3)} {contact.phone.slice(3, 7)} {contact.phone.slice(7)}</a>
          <span>© {new Date().getFullYear()} YUQUAN YE<br />STAGE LIGHTING DESIGNER</span>
          <a href="#top" className="back-top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  )
}
