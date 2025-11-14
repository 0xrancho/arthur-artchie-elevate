# Arthur & Archie - Trust-Based Revenue Growth

Opportunity Intelligence systems that preserve institutional knowledge and enable growth for professional services firms.

## Technologies

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```sh
cp .env.example .env
```

Required environment variables:
- `VITE_AIRTABLE_API_KEY`: Your Airtable API key
- `VITE_AIRTABLE_BASE_ID`: Your Airtable Base ID
- `VITE_AIRTABLE_TABLE_NAME`: Your Airtable table name (default: Contacts)

### Setting up Airtable

1. Create an Airtable base with a table named "Contacts" (or your preferred name)
2. Add the following fields to your table:
   - Name (Single line text)
   - Email (Email)
   - Company (Single line text)
   - Description (Long text)
   - Submitted At (Date)
3. Create an API token at https://airtable.com/create/tokens with access to your base
4. Add your credentials to `.env`

## Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add the environment variables in Vercel project settings:
   - `VITE_AIRTABLE_API_KEY`
   - `VITE_AIRTABLE_BASE_ID`
   - `VITE_AIRTABLE_TABLE_NAME`
4. Deploy

Alternatively, use the Vercel CLI:

```sh
npm i -g vercel
vercel
```

### Logo Setup

The Arthur & Archie logo (`AAlogo42.png`) is configured for:
- Browser favicon
- Open Graph meta tags
- Twitter cards
