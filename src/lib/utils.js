const randomBytes = (length) => {
	const array = new Uint8Array(length);
	crypto.getRandomValues(array);
	return array;
  };
export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const generateUsername = (name) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 6)}${id}`;
};

export const generatePassword = () => {
	const passwordLength = 8;
	const characters = '0123456789zxcvbnmasdfghjklqwertyuiop';
	let password = '';
  
	const randomArray = randomBytes(passwordLength);
	randomArray.forEach((byte) => {
	  const randomIndex = byte % characters.length;
	  password += characters.charAt(randomIndex);
	});
  
	return password;
  };

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

export const validateData = async (formData, schema) => {
	const body = Object.fromEntries(formData);

	try {
		const data = schema.parse(body);
		return {
			formData: data,
			errors: null
		};
	} catch (err) {
		console.log('Error: ', err);
		const errors = err.flatten();
		return {
			formData: body,
			errors
		};
	}
};
