import React, { useState } from 'react';
import Header from './Header.jsx'
import SeafareItem from './SeafareItem.jsx';

export default function Seafares() {
  


  return (
    <div className="seafareItems">
    <SeafareItem title="Togt 26. Fransk Polynesien" start_date="3. December" end_date="15. January" destination="Fransk Polynesien" seafare_area="Stillehavet" price="43.000 DKK" captain="Skipper Bent" />
    <SeafareItem />
    <SeafareItem />
    <SeafareItem />
    </div>
  )
}