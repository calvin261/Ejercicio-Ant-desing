import { Descriptions, Badge } from 'antd'
import React from 'react'
import "../App.css";
const DescriptionCompoent = () => {
    return (
        <Descriptions  className="color1"  title="Componente Descriptivo" bordered>
        <Descriptions.Item labelStyle={{ background: '#08bec4' }} label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item labelStyle={{ background: '#08bec4' }} label="Billing Mode">Prepaid</Descriptions.Item>
        <Descriptions.Item labelStyle={{ background: '#08bec4' }} label="Automatic Renewal">YES</Descriptions.Item>
        <Descriptions.Item labelStyle={{ background: '#08bec4' }} label="Order time">2018-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item labelStyle={{ background: '#08bec4' }} label="Usage Time" span={2}>
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item  labelStyle={{ background: '#08bec4' }} label="Status" span={3}>
          <Badge status="pr ocessing" text="Running" />
        </Descriptions.Item >
        <Descriptions.Item  labelStyle={{ background: '#08bec4' }} label="Negotiated Amount">$80.00</Descriptions.Item>
        <Descriptions.Item  labelStyle={{ background: '#08bec4' }} label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item  labelStyle={{ background: '#08bec4' }} label="Official Receipts">$60.00</Descriptions.Item>
        <Descriptions.Item  labelStyle={{ background: '#08bec4' }} label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    )
}

export default DescriptionCompoent
