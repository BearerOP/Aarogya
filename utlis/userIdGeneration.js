// Function to generate a unique user ID
function generateUniqueUserID(firstName, lastName = '', numberOfUsers) {
  // Extract initials from first and last name
  const year = new Date().getFullYear();
  const initials =
    (firstName[0] || '').toUpperCase() + (lastName[0] || '').toUpperCase();

  // Ensure the initials are two characters long
  const formattedInitials = initials.padEnd(2, 'X');

  // Generate a unique number by incrementing the count of users
  const uniqueNumber = numberOfUsers + 1;

  // Format the unique user ID
  const userID = `${formattedInitials}${year}${uniqueNumber.toString().padStart(4, '0')}`;

  return userID;
}

module.exports = {
  generateUniqueUserID,
};
