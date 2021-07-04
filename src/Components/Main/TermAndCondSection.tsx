import React from "react";
import P from "../Utility/P";
import Content from "../Utility/Content";
import TextLink from "../Utility/TextLink";

interface Props {}

const TermAndCondSection: React.FC<Props> = (props) => {
	return (
		<section className="border-b-4 shadow-md">
			<div className="mt-20 mb-10 md:mb-10 md:mt-28 md:px-16 px-4 p-8 bg-gray-100 ">
				<P>At participating stores. Restrictions apply.</P>
				<div className="mt-8 md:flex md:justify-between md:items-start">
					<Content title="EARNING STARS" color="Gray" className="md:w-full">
						<P>
							Stars cannot be earned on purchases of alcohol, Starbucks Cards or
							Starbucks Card reloads.
						</P>
						<P className="mt-3">
							Earn 1 Star per $1 spent when you scan your member barcode in the
							app, then pay with cash, credit/debit cards or mobile wallets at
							participating stores. You can also earn 1 Star per $1 spent when
							you link a payment method and pay directly through the app.
						</P>
						<P className="mt-3">
							Earn 2 Stars per $1 spent when you load funds and pay with your
							digital Starbucks Card in the app. You can also earn 2 Stars per
							$1 spent when you pay in-person at a participating store with your
							registered physical Starbucks Card or scan your member barcode in
							the app, and then use any physical Starbucks Card (regardless of
							whether it is registered) to complete the purchase.
						</P>
					</Content>
					<Content
						title="TERMS OF USE"
						color="Gray"
						className="mt-5 md:mt-0 md:w-full md:ml-6"
					>
						<P>
							For full program details visit{" "}
							<TextLink href="#" color="Green">
								starbucks.com/rewards/terms
							</TextLink>
						</P>
						<P className="mt-3">
							* Earn 1 Star per $1 when digitally loading your Starbucks Card
							with your Starbucks® Rewards Visa® Card: See your Card Rewards
							Program Agreement for more details.
						</P>
						<P className="mt-3">
							Starbucks® Rewards benefits are available at participating
							Starbucks stores. Not all stores have the ability to honor Rewards
							at this time. Visit the{" "}
							<TextLink color="Green" href="#">
								Starbucks Store Locator
							</TextLink>{" "}
							and search for locations honoring “Redeem Rewards”.
						</P>
						<P className="mt-3">
							Deposit and credit card products provided by JPMorgan Chase Bank,
							N.A. Member FDIC
						</P>
					</Content>
				</div>
				<div className="mt-5 md:flex md:justify-between md:items-start">
					<Content title="BENEFITS" color="Gray" className="md:w-full">
						Free refills available during same in-store visit only. To qualify
						for the Birthday Reward, you must have made at least one
						Star-earning transaction.
					</Content>
					<Content
						title="REDEEMING REWARDS"
						color="Gray"
						className="mt-5 md:mt-0 md:w-full md:ml-6"
					>
						Rewards cannot be redeemed for alcoholic beverages or multi-serve
						items. Not all stores honor tiered Rewards. Select stores redeem 150
						Stars for free food or drink items only.
					</Content>
				</div>
			</div>
		</section>
	);
};

TermAndCondSection.defaultProps = {};

export default TermAndCondSection;
