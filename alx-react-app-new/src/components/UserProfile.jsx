const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '20px', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ color: 'blue', fontSize: '1.8em', marginBottom: '10px' }}>{props.name}</h2>
            <p style={{ marginBottom: '5px' }}>
                <span style={{ fontWeight: 'bold', color: '#555' }}>Age:</span> 
                <span style={{ marginLeft: '5px', color: '#333' }}>{props.age}</span>
            </p>
            <p style={{ fontStyle: 'italic', color: '#666' }}>
                <span style={{ fontWeight: 'bold' }}>Bio:</span> {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;
