

DROP TABLE IF EXISTS notes;


CREATE TABLE notes (
    note_id serial PRIMARY KEY,
    note_title varchar(100),
    note_body text
);