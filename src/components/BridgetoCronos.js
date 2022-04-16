import React from 'react'
import image3 from "./images/image3.png"


export default function BridgetoCronos() {
    return (
        <div>
            <section>
                <div className="container">
                <div className="buy text-center">
                <span className="gradient-text my-5 fs-3">How to buy Bridge to Cronos </span>
                </div>
                    <div className="row">
                        <div className='col-12 col-lg-5 col-md-12'>
                            <div className="eft-heading">
                                <div className="eft-desc">
                                    <ul className="eftList-item text-light">
                                        <li>
                                            Download and set up{" "}
                                            <a
                                                href="https://metamask.io/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="metamask"
                                            >
                                                <b> MetaMask</b>
                                            </a>{" "}
                                            or{" "}
                                            <a
                                                href="https://trustwallet.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="metamask"
                                            >
                                                <b>Trust Wallet</b>
                                            </a>
                                        </li>
                                        <li>Purchase BNB (BEP-20) and send to your wallet address</li>
                                        <li>
                                            Revisit this section of our website, or visit our
                                            <a
                                                href="https://pancakeswap.finance/swap?outputCurrency=0x92a4EbEE814AFe58741d7f216dC10211d5aBC250"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="metamask"
                                            >
                                                {" "}
                                                <b>PancakeSwap</b>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            Insert the amount of BNB you would like to swap for ERabbit
                                        </li>
                                        <li>
                                            Change the slippage amount to between 1%-15%. Depending on the
                                            buy and <br /> sell pressure, higher slippage may be necessary
                                        </li>
                                        <li>
                                            Press “Swap” and confirm the transaction in your wallet{" "}
                                        </li>
                                        <li>
                                            Congratulations – welcome to the ERabbit's community!
                                        </li>
                                    </ul>
                                    <p className="eft-para text-light">
                                        If you prefer the PancakeSwap option, click “select a currency”
                                        and <br /> enter and import the $EFT contract address: <br />
                                        <a
                                            href="https://bscscan.com/token/0x92a4EbEE814AFe58741d7f216dC10211d5aBC250"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="metamask"
                                        >
                                            <b>0x92a4EbEE814AFe58741d7f216dC10211d5aBC250</b>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 col-md-12">
                            <div className="image">
                                <img src={image3} alt="" className="vert-move" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
