# Customer Authentication Setup

Customer accounts are stored in `data/mayleen.sqlite`. Passwords are stored as salted scrypt hashes; session tokens are held in HTTP-only cookies and only their hashes are stored in SQLite. Mobile numbers are stored for login but are not verified by SMS.

To enable email verification for signup and password recovery:

1. Copy `.env.example` to `.env`.
2. Add SMTP host, port, sender, and credentials for email delivery.
3. Generate a random secret with `node --input-type=commonjs -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"`, put it in `OTP_SECRET`, and keep it stable so pending codes remain verifiable after restarts.
4. Restart with `npm run dev`.

Email verification codes for signup and password recovery expire after 10 minutes and are limited to five attempts. Account creation is blocked until the email is verified. Password recovery uses the registered email, consumes its code once, and revokes the account's existing sessions. The server returns a delivery error instead of accepting a code when SMTP is missing.

For production, set `NODE_ENV=production`, use HTTPS, and keep `.env` and `data/` out of source control. The session cookie is marked Secure in production.