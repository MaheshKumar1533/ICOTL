import React from 'react'
import './callForPaper.css'
import { ListItem, ListItemIcon, Typography } from '@mui/material'
import{ List, ListItemText} from '@mui/material'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import EastIcon from "@mui/icons-material/East";


export default function CallForPaper() {
  const topics = [
    "Statistical and Machine Learning Algorithms: Classification and Regression Algorithms, Optimization of objective functions – algorithms and efficacies",
    "Neural Networks and Support Vector Machines: Shallow and Deep Networks, Auto-coders", 
    "Pattern recognition, Object Detection and Image analysis", 
    "Stochastic Search Algorithms for Optimum Solutions: Constrained and unconstrained problems, Evolutionary programming and its variants",
    "Type I and Type II Fuzzy algorithms, Granular computing and rough set",
    "Optimization in Sustainable and Strategic Problems, Personal and Social problems",
    "Social and Scale Free Networks: Clustering and Centrality, Applications in Recommender System, Bioinformatics, Disease control, Social Welfare, etc.",
    "Text mining: Semantics Analysis, Topic Modeling, Sentiment Analysis, Web Mining, Transformer and BERT",
    "Cognitive Neuroscience: Neuro-computing, Perception, Cognition",
    "Optimization in Finance and Business Management"
  ]


  return (
    <div className="callForPaper">
      <p className="cfpNote1">
        Individual submissions in the following area are invited. Authors are
        invited to submit the full manuscript (maximum 6 pages including
        references) of their technical paper, for oral or poster presentation.
        Papers in pdf format may be uploaded via the web using the system at:
        https://easychair.com/ICOTL2023 The authors need to open an account in
        EasyChair for paper submission. Accepted papers will be published in the
        conference proceedings with an IEEE catalog number and ISBN number. The
        proceedings will be submitted for possible publication in IEEE Xplore
        and indexing by EI Compendex.{" "}
      </p>{" "}
      <br />
      <Typography variant="h5" style={{marginBottom:15}}>
        ICOTL 2023 topics include but not limited to the following:
      </Typography>
      <div>
        {topics.map((topic) => (
          <div className="callForPeperPointsDiv">
            <EastIcon />
            <p>{ topic }</p>
          </div>
        ))}
      </div>
    </div>
  );
}
