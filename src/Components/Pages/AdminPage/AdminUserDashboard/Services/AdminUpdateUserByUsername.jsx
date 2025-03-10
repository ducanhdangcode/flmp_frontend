import React, { useState } from 'react'
import ServiceHeaderTemplates from '../Templates/ServiceHeaderTemplates';

const AdminUpdateUserByUsername = () => {
    const [displayService, setDisplayService] = useState(false);
    const [displayResponse, setDisplayResponse] = useState(false);

    const handleSetupDisplayService = (choice) => {
        setDisplayService(choice);
    }

    const handleSetupDisplayResponse = (choice) => {
        setDisplayResponse(choice);
    }
  return (
    <div>
        {/* header */}
        <div>
            <ServiceHeaderTemplates 
                handleSetupDisplayService={handleSetupDisplayService}
                handleSetupDisplayResponse={handleSetupDisplayResponse}
                fillColor={"#ebd494"}
                borderColor={"#a17a0d"}
                method={"PUT"}
                path={`/api/user/{username}/update-all`}
                description={"Update user by username"}
                displayService={displayService}
            />
        </div>
    </div>
  )
}

export default AdminUpdateUserByUsername
