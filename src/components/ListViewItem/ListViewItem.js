import React, { Component } from 'react'
import { List, Card } from 'semantic-ui-react'

class ListViewItem extends Component {
  state = {
    shops: [{
      name: 'demo cuts',
      location: '123 demo street, Washington, D.C., 20003',
      phone: '123-456-7890'
		},
		{
      name: 'demo cuts 2',
      location: '6129 Grey Friar Way, Dublin, OH, 43017',
      phone: '102-443-1230'
		},
		{
      name: 'demo cuts 3',
      location: '1134 demo street, Seattle, WA, 12345',
      phone: '123-456-7890'
    }]
  }

  render = () => {
    return (
			this.props.businesses.map((item, index) => {
				return (
					<List.Item>
						<Card> 
							<Card.Content>
								<Card.Header>{item.name}</Card.Header>
								<Card.Meta>{item.location}</Card.Meta>
								<Card.Meta>{item.phone}</Card.Meta>
								<Card.Content>{}</Card.Content>
							</Card.Content>
						</Card>
					</List.item>
				)
			})
    )
  }
}
