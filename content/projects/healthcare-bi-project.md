---
title: "Healthcare BI Dashboard"
description: "Business intelligence dashboard over a star-schema healthcare warehouse with 108,000 synthetic records"
date: "2025-09-14"
featured: false
technologies: ["Streamlit", "Python", "SQLite", "Plotly", "pandas", "Star Schema", "Data Warehousing"]
github: "https://github.com/Faheem8585/healthcare-bi-project"
image: "/images/projects/healthcare-bi.png"
---

## Overview

An interactive business intelligence dashboard for healthcare analytics, built on a properly modelled warehouse rather than a flat spreadsheet.

## Pipeline

1. A Python generator produces synthetic healthcare data: 7 datasets, 108,000 records
2. Loaded into a SQLite star schema with 4 dimension tables and 3 fact tables
3. A Streamlit dashboard serves over 10 interactive Plotly charts with dynamic filtering, automated report generation, and upload and download

The data is entirely synthetic and the design is GDPR-conscious, with patient records anonymised by construction rather than after the fact.

## Why the Star Schema

Dimension and fact tables are the standard shape of a reporting warehouse, and they are what makes slicing by time, department and patient cohort fast without rewriting a query each time. Building it this way rather than querying a wide flat table is the difference between a dashboard and a chart.

## Stack

Streamlit, Python, SQLite, Plotly, pandas.
