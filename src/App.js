//import logo from './logo.svg';
import './App.css';
import { PricingTable, PricingSlot, PricingDetail} from "react-pricing-table";
//install react-pricing-table;

function App() {
  return (
    <div className="App">
    <PricingTable  highlightColor="#1abc9c">
      <PricingSlot buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
        <PricingDetail> ✅ Watch free videos </PricingDetail>
        <PricingDetail> ❌  With Ad movies </PricingDetail>
        <PricingDetail> ❌  With Ad videos </PricingDetail>
        <PricingDetail> ❌  Offline videos </PricingDetail>
        <PricingDetail> ❌  Buffering videos ! </PricingDetail>
      </PricingSlot>
      <PricingSlot buttonText='SIGN UP' title='VIP' priceText='$24/month'>
        <PricingDetail> ✅  Everything is free </PricingDetail>
        <PricingDetail> ✅  Ad free movies </PricingDetail>
        <PricingDetail> ✅  Download available </PricingDetail>
        <PricingDetail> ❌  Little byte of Ad</PricingDetail>
        <PricingDetail> ❌  Buffering is too far ! </PricingDetail>
      </PricingSlot>
      <PricingSlot buttonText='SIGN UP' title='PRIME' priceText='$64/month'>
        <PricingDetail> ✅  Everything is free </PricingDetail>
        <PricingDetail> ✅  Ad free movies videos </PricingDetail>
        <PricingDetail> ✅  Download available </PricingDetail>
        <PricingDetail> ✅  Offline available</PricingDetail>
        <PricingDetail> ✅  No Ad available ! </PricingDetail>
      </PricingSlot>
    </PricingTable>
    </div>
  );
}

export default App;
