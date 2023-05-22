export interface CommandArgTypes {
    ARG: CommandArgConfig;
    ARGS: CommandArgConfig;
    BLOCK_STATE: CommandArgConfig;
    BLOCK_STATE_ARRAY: CommandArgConfig;
    BLOCK_STATE_ARRAY_CONT: CommandArgConfig;
    BLOCK_STATE_KEY: CommandArgConfig;
    BLOCK_STATE_VALUE: CommandArgConfig;
    BLOCK_STATE_VALUES: CommandArgConfig;
    COMMAND: CommandArgConfig;
    COMPAREOPERATOR: CommandArgConfig;
    COORD_X_FLOAT: CommandArgConfig;
    COORD_X_INT: CommandArgConfig;
    COORD_Y_FLOAT: CommandArgConfig;
    COORD_Y_INT: CommandArgConfig;
    COORD_Z_FLOAT: CommandArgConfig;
    COORD_Z_INT: CommandArgConfig;
    EQUIPMENTSLOTENUM: CommandArgConfig;
    FAMILYARG: CommandArgConfig;
    FLOAT: CommandArgConfig;
    FULLINTEGERRANGE: CommandArgConfig;
    HASITEMARG: CommandArgConfig;
    HASITEMARGS: CommandArgConfig;
    HASITEMELEMENT: CommandArgConfig;
    HASITEMELEMENTS: CommandArgConfig;
    HASITEMSELECTOR: CommandArgConfig;
    ID: CommandArgConfig;
    IDCONT: CommandArgConfig;
    INT: CommandArgConfig;
    INTEGERRANGE: CommandArgConfig;
    INTEGERRANGEPOSTVAL: CommandArgConfig;
    INTEGERRANGEVAL: CommandArgConfig;
    JSON_ARRAY: CommandArgConfig;
    JSON_ARRAY_CONT: CommandArgConfig;
    JSON_ARRAY_VALUES: CommandArgConfig;
    JSON_FIELD: CommandArgConfig;
    JSON_OBJECT: CommandArgConfig;
    JSON_OBJECT_CONT: CommandArgConfig;
    JSON_OBJECT_FIELDS: CommandArgConfig;
    JSON_VALUE: CommandArgConfig;
    MARG: CommandArgConfig;
    MESSAGE: CommandArgConfig;
    MESSAGEEXP: CommandArgConfig;
    MESSAGE_ROOT: CommandArgConfig;
    MVALUE: CommandArgConfig;
    NAMEARG: CommandArgConfig;
    NONIDSELECTION: CommandArgConfig;
    OPERATOR: CommandArgConfig;
    PATHCOMMAND: CommandArgConfig;
    PATHCOMMANDCONT: CommandArgConfig;
    PATHCOMMANDVAL: CommandArgConfig;
    PERMISSIONARG: CommandArgConfig;
    PERMISSIONARGS: CommandArgConfig;
    PERMISSIONELEMENT: CommandArgConfig;
    PERMISSIONELEMENTS: CommandArgConfig;
    PERMISSIONSELECTOR: CommandArgConfig;
    POSITION: CommandArgConfig;
    POSITION_FLOAT: CommandArgConfig;
    POSTSELECTOR: CommandArgConfig;
    RAWTEXT: CommandArgConfig;
    RAWTEXTCONT: CommandArgConfig;
    RVAL: CommandArgConfig;
    SCORESARG: CommandArgConfig;
    SCORESARGS: CommandArgConfig;
    SCORESELECTOR: CommandArgConfig;
    SCORESELECTPARAM: CommandArgConfig;
    SELARGS: CommandArgConfig;
    SELECTION: CommandArgConfig;
    SLASHCOMMAND: CommandArgConfig;
    STANDALONESELECTION: CommandArgConfig;
    TAGARG: CommandArgConfig;
    TAGSELECTOR: CommandArgConfig;
    TYPEARG: CommandArgConfig;
    VAL: CommandArgConfig;
    WILDCARDINT: CommandArgConfig;
    WILDCARDSELECTION: CommandArgConfig;
    eps: CommandArgConfig;
}
export interface CommandArgConfig {
    description: string;
    id: number;
}
