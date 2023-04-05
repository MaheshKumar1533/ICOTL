import React from 'react'
import { Typography } from '@mui/material'
import './committee.css'
import Chair from './chair'
import { HonoraryChair, GeneralChair, PCChair, PCCoChair, SpecialSessionChair, PublicityAndIndustryAllianceChair, PublicationChair, PublicationCoChair, LocalOrganizingFinanceChair, AdvisoryCommittee, RegistrationChair, SteeringCommitteeMembers  } from './members'


export default function Committe() {
  return (
    <div className='committee' >
      <Chair
        label='Honorary Chair'
        defaultExpanded={true}
        list={HonoraryChair}
      />
      <Chair
        label='General Chair'
        defaultExpanded={true}
        list={GeneralChair}
      />
      <Chair
        label='PC Chair'
        defaultExpanded={true}
        list={PCChair}
      />
      <Chair
        label='PC Co-Chair'
        defaultExpanded={true}
        list={PCCoChair}
      />
      <Chair
        label='Special Session Chair'
        defaultExpanded={true}
        list={SpecialSessionChair}
      />
      <Chair
        label='Publicity & Industry Alliance Chair'
        defaultExpanded={false}
        list={PublicityAndIndustryAllianceChair}
      />
      <Chair
        label='Publication Chair'
        defaultExpanded={false}
        list={PublicationChair}
      />
      <Chair
        label='Publication Co-Chair'
        defaultExpanded={false}
        list={PublicationCoChair}
      />
      <Chair
        label='Local Organizing & Finance Chair'
        defaultExpanded={false}
        list={LocalOrganizingFinanceChair}
      />
      <Chair
        label='Advisory Committee'
        defaultExpanded={false}
        list={AdvisoryCommittee}
      />
      <Chair
        label='Registration Chair'
        defaultExpanded={false}
        list={RegistrationChair}
      />
      <Chair
        label='Steering Committee Members'
        defaultExpanded={false}
        list={SteeringCommitteeMembers}
      />
    </div>
  )
}

// Goutam Chakraborty
// Iwate Prefectural University, Japan D. Nidhya, MITS, India,  Masafumi MatsuHara, IPU, Japan

// Rung-Ching Chen
// Chaoyang University of Technology, Taiwan
