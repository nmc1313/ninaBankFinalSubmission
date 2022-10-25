function Home(){
  return (
    <Card
      bgcolor="info"
      header="NinaBank Home Page"
      title="Welcome to NinaBank!"
      text="Please address your financial needs by using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
