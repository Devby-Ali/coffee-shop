import React from "react";
import { transActions } from "../../datas";
import "./WidgetLg.css";

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest TransAction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amout</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {transActions.map(transActions => (
                    <tr key={transActions.id} className="widgetLgTr">
                    <td className="widgetLgUser">
                      <img src={transActions.img} className="widgetLgImg" alt="img" />
                      <span className="widgetLgName">{transActions.transActions}</span>
                    </td>
                    <td className="widgetLgDate">{transActions.date}</td>
                    <td className="widgetLgAmount">{transActions.amount}</td>
                    <td className="widgetLgStatus">
                      <Button type={transActions.status} />
                    </td>
                  </tr>
        ))}

        

      </table>
    </div>
  );
}
