"use client"

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Checkout from './Checkout'

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className="button rounded-full" size="lg">
              <Link href="/sign-in">
                Get Tickets
              </Link>
            </Button>

            <Button asChild className="button rounded-full bg-green-500 text-white" size="lg">
              <a href="https://wa.me/+14379976561?text=Hello,%20I%20am%20interested%20in%20booking%20a%20reservation%20for%20the%20India%20vs%20Pakistan%20T20%20match%20screening.%20Please%20provide%20me%20with%20the%20details.%20Thank%20you!" target="_blank" rel="noopener noreferrer">
                Contact on WhatsApp
              </a>
            </Button>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
}

export default CheckoutButton