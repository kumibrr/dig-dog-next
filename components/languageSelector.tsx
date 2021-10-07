import { Autocomplete, Box, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { SyntheticEvent } from "react";
import countries from "../enums/countries";

const LanguageSelector = () => {
  const t = useTranslations("languageSelect");

  const onSelect = (e: SyntheticEvent) => {
    console.log(e.target);
  };

  return (
    <Autocomplete
      id="language-selection"
      sx={{ width: 300 }}
      options={countries}
      getOptionLabel={(option) => `${option.emoji} ${option.language}`}
      onChange={(e) => onSelect(e)}
      disableClearable={true}
      renderOption={(props, option) => (
        <Box component="li" value={option.code} {...props}>
          {option.emoji} {option.language}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("selectLanguage")}
          inputProps={params.inputProps}
        ></TextField>
      )}
    ></Autocomplete>
  );
};

export default LanguageSelector;
