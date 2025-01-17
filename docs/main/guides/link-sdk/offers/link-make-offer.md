---
id: "link-make-offer"
title: "Link.makeOffer"
slug: "/link-make-offer"
excerpt: "Link can now be used to make an offer on an asset"
sidebar_position: 1
keywords: [trading, orderbook, offers, buy-order]
---

:::danger OFFERS IS ONLY AVAILABLE IN THE SANDBOX ENVIRONMENT
Please only use these features for testing / integration in the sandbox environment. Offers are not supported in production yet.
:::

:::note Link reference tool
Check out our **[Link reference tool](https://tools.immutable.com/link-reference/)** to understand how `Link` methods work without having to write any code.
:::

Here's how you can make an offer:

```typescript
import { Link, ImmutableXClient, ImmutableOrderStatus} from ‘@imtbl/imx-sdk’;
const link = new Link("https://link.sandbox.x.immutable.com")
// make an offer for 0.25 ETH
await link.makeOffer({
  tokenId: '123',
  tokenAddress: '0x2ca7e3fa937cae708c32bc2713c20740f3c4fc3b',
  amount: '0.25',
  currencyAddress: ''
});
// NOTE: removing the currencyAddress property will default to the offer to be in ETH as well
```

Just like all other link SDK methods, **makeOffer** returns a promise, which resolves once all operations are complete, or rejects once the link encounters a critical error.

Input parameters:
```typescript
{
  tokenId: string, // id of the asset
  tokenAddress: string, // contract address of the collection
  amount: string,  // offer amount, must be greater than 0
  currencyAddress?: string, // contract address of the currency token, default is ETH
  expirationTimestamp?: string, // unix timestamp seconds as a string. Must be at least 1 week into the future, defaults to 99 years into the future
}
```

Make offer response:
```typescript
{
  orderId: string, // positive integer string
  status: string
}
/* example response
{
  orderId: "940",
  status: "active"
}
*/

```
![Make an offer](/img/link-offers/make-offer-prompt.png 'Make an offer')

![Make an offer confirmation](/img/link-offers/make-offer-success.png 'Make an offer confirmation')

## Errors

See error responses [here](./../link-errors.md#offers).