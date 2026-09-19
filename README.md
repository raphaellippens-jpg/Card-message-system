# Card Message System

A physical card system connected to online accounts.

## Features

- User accounts
- Multiple cards per account
- Unique card codes
- Separate data for every card
- QR-code scanning
- Card ownership detection
- Card data editing
- Public card viewing
- JSON data export
- Printable cards

## Architecture

The website is hosted with GitHub Pages.

Supabase provides:

- Authentication
- PostgreSQL database
- Row Level Security
- Card storage
- Card data storage
- Secure public-card access

## Card structure

Each card belongs to one account.

A new card receives:

- A unique card ID
- A unique card code
- Its own empty data record

Creating a new card does NOT copy the data from another card.

## Security

Private card editing is protected by Supabase Row Level Security.

The physical QR code identifies the card. It does not contain the card's actual data.

## Project

Card Message System
