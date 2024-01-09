import React from "react";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
	HomeOutlined,
	CalendarOutlined,
	AppstoreOutlined,
	CarOutlined,
	NotificationOutlined,
	BarChartOutlined,
	BankOutlined,
	ToolOutlined,
	PercentageOutlined,
	TeamOutlined,
	ThunderboltOutlined,
	DashboardOutlined,
	DownOutlined,
	QuestionCircleOutlined,
	MessageOutlined,
	CaretDownOutlined,
	DownloadOutlined,
	WalletOutlined,
} from "@ant-design/icons";
// import logo from "./logo.png"
import {
	AutoComplete,
	Button,
	Layout,
	Menu,
	Pagination,
	Select,
	Table,
	theme,
} from "antd";
const { Header, Content, Footer, Sider } = Layout;
const items = [
	// {title:"Home",icon:home},
	VideoCameraOutlined,
	UploadOutlined,
	UserOutlined,
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: `nav ${index + 1}`,
}));
const sideBarData = [
	{ title: "Home", icon: HomeOutlined },
	{ title: "Orders", icon: CalendarOutlined },
	{ title: "Products", icon: AppstoreOutlined },
	{ title: "Delivery", icon: CarOutlined },
	{ title: "Marketing", icon: NotificationOutlined },
	{ title: "Analytics", icon: BarChartOutlined },
	{ title: "Payments", icon: BankOutlined },
	{ title: "Tools", icon: ToolOutlined },
	{ title: "Discounts", icon: PercentageOutlined },
	{ title: "Audience", icon: TeamOutlined },
	{ title: "Appearance", icon: DashboardOutlined },
	{ title: "Plugins", icon: ThunderboltOutlined },
]?.map((ele, ind) => ({
	key: ind + 1,
	icon: React.createElement(ele?.icon),
	label: ele?.title,
}));
const columns = [
	{
		title: "Order ID",
		dataIndex: "orderid",
		key: "name",
		render: (text) => <a>{text}</a>,
	},
	{
		title: "Order date",
		dataIndex: "orderDate",
		key: "age",
	},
	{
		title: "Order amount",
		dataIndex: "orderAmount",
		key: "address",
	},
	{
		title: "Transaction fees",
		dataIndex: "transactionFees",
		key: "address",
	},
];
const data = [
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
	{
		key: "1",
		orderid: "#281209",
		orderDate: "7th July, 2023",
		orderAmount: "₹ 1,279.23",
		transactionFees: "₹22",
	},
];
const Sidebar = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
				style={{ backgroundColor: "#1E2640" }}
			>
				<div className="demo-logo-vertical" />
				<div style={{ margin: "10px", height: "40px", display: "flex",gap:"15px" }}>
					<img src="/nishyan.png" alt="logo" />
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "90%",
						}}
					>
						<div
							style={{
								color: "rgba(255, 255, 255, 0.65)",
								display: "flex",
								flexDirection: "column",
								gap: "5px",
							}}
						>
							<span>Nishyan</span>
							<span>Visit Store</span>
						</div>
						<DownOutlined style={{ color: "rgba(255, 255, 255, 0.65)" }} />
					</div>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultOpenKeys={["sub1"]}
					defaultSelectedKeys={["4"]}
					items={sideBarData}
					style={{ backgroundColor: "#1E2640" }}
				/>
				<div
					style={{
						color: "rgba(255, 255, 255, 0.65)",
						position: "absolute",
						bottom: "10px",
						display:"flex",
						gap:"15px",
						paddingLeft:"24px",
						// backgroundColor:"#fff",
					}}
				>
					<div>
						<WalletOutlined style={{ fontSize: "25px" }} />
					</div>
					<div style={{display:"flex",flexDirection:"column"}}>
						<span>Available Credits</span>
						<span>222.10</span>
					</div>
				</div>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<div className="header-container">
						<div className="first-box">
							<span>Payments</span>
							<span style={{ display: "flex", gap: "5px" }}>
								{" "}
								<QuestionCircleOutlined />
								How it works
							</span>
						</div>
						<div className="second-box">
							<input
								className="search-bar"
								type="search"
								placeholder="Search features, tutorials, etc."
							/>
						</div>
						<div className="third-box">
							<div>
								<MessageOutlined style={{ fontSize: "30px" }} />
							</div>
							<div>
								<CaretDownOutlined style={{ fontSize: "30px" }} />
							</div>
						</div>
					</div>
				</Header>
				<div className="overview-section">
					<div>Overview</div>
					<div>
						<Select
							defaultValue="Last Month"
							style={{
								width: 120,
							}}
							// allowClear
							options={[
								{
									value: "Last Month",
									label: "Last Month",
								},
							]}
						/>
					</div>
				</div>
				<div className="statics">
					<div>
						<div>Online orders</div>
						<h1>231</h1>
					</div>
					<div>
						<div>Amount Received</div>
						<h1>₹  23,456,78</h1>
					</div>
				</div>
				<div style={{ paddingLeft: "20px", marginTop: "20px" }}>
					{" "}
					Transaction | This Month
				</div>
				<Content
					style={{
						margin: "24px 16px 0",
					}}
				>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						<div className="order-container">
							<div className="order-search">
								<input
									className="search-bar"
									type="search"
									placeholder="Search by order ID..."
								/>
							</div>
							<div style={{ display: "flex", gap: "15px" }}>
								<Button>Sort</Button>
								<Button>
									<DownloadOutlined />
								</Button>
							</div>
						</div>
						<div style={{ marginTop: "20px" }}>
							<Table columns={columns} dataSource={data} pagination={false} />
						</div>
						<div className="pagination">
							<Pagination defaultCurrent={10} total={500} />
						</div>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};
export default Sidebar;
