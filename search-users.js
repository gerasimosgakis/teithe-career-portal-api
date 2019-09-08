const db = require("./db_connect");

module.exports.main = async event => {
  const data = JSON.parse(event.body);
  const {
    name,
    handle,
    company,
    status,
    skills,
    githubusername,
    current,
    start_date,
    end_date,
    school,
    degree
  } = data;

  console.log(`%${name}%`);
  const sql = `
      SELECT *
      FROM profiles 
      JOIN educations
      ON profiles.id = educations.user_id
      AND (profiles.name LIKE $1 OR $1 IS NULL)
      AND (profiles.handle LIKE $2 OR $2 IS NULL)
      AND (profiles.company LIKE $3 OR $3 IS NULL)
      AND (profiles.status LIKE $4 OR $4 IS NULL)
      AND ((ARRAY[profiles.skills]::text) LIKE $5 OR $5 IS NULL)
      AND (profiles.githubusername LIKE $6 OR $6 IS NULL)
      AND (educations.current = $7 OR $7 IS NULL)
      AND (educations.start_date = $8 OR $8 IS NULL)
      AND (educations.end_date = $9 OR $9 IS NULL)
      AND (educations.school LIKE $10 OR $10 IS NULL)
      AND (educations.degree LIKE $11 OR $11 IS NULL)
    `;
  try {
    const result = await db.query(
      sql,
      name ? `%${name}%` : null,
      handle ? `%${handle}%` : null,
      company ? `%${company}%` : null,
      status ? `%${status}%` : null,
      skills ? `%${skills}%` : null,
      githubusername ? `%${githubusername}%` : null,
      current,
      start_date,
      end_date,
      school ? `%${school}%` : null,
      degree ? `%${degree}%` : null
    );
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: e.statusCode || 500,
      body: "ERROR: Could not find users: " + e
    };
  }
};
