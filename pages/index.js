import {useWeb3} from "@3rdweb/hooks"

export default function Home() {
    const {address, connectWallet} = useWeb3();
    return (
        <>
            <button onClick={() => connectWallet("injected")}>Connect Wallet</button>
        </>
    )
}
