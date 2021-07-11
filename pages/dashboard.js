import { Link } from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Note from "../components/Note";
import WithAuth from "../components/withAuth";

function Dashboard() {
  
  return <WithAuth>{ <Navbar/>}</WithAuth>;
}

export default Dashboard;
