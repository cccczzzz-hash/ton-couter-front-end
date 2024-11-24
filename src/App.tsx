import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import WebApp from '@twa-dev/sdk'

function App() {
    const {
        contract_address,
        counter_value,
        contract_balance,
    } = useMainContract();
    return (
        <div>
            <div>
                <TonConnectButton />
            </div>
            <div>
                <div className='Card'>
                    <b>Our contract Address</b>
                    <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
                    <b>Our contract Balance</b>
                    <div className='Hint'>{contract_balance}</div>
                    <a onClick={() => WebApp.showAlert("Hello")}>say hello</a>
                </div>

                <div className='Card'>
                    <b>Counter Value</b>
                    <div>{counter_value ?? "Loading..."}</div>
                </div>
            </div>
        </div>
    );
}

export default App;