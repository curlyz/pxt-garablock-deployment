function getSimulatedName(name) {
    return `simulated_` + name
}
if (false) {

}
window.optimizeGenerator = true;
window.getFirmwareVersion = () => {
    if (window.modem.metadata == undefined) return 0;
    if (window.modem.metadata.version == undefined) return 0;
    return parseInt(window.modem.metadata.version.substring(1, window.modem.metadata.version.length ))
}

function getVarString(block) {
    let vars = {};
    block.getDescendants().forEach(child => {
        let VAR = null;
        if (child.type == 'variables_set') {
            VAR = child.inputList[0].fieldRow[1].selectedOption_[0]
        }
        else if (child.type == 'variables_get') {
            VAR = child.getField('VAR').variable_.name
        }
        else if (child.type == 'variables_change') {
            VAR = child.inputList[0].fieldRow[1].selectedOption_[0]
        }
        else if (child.type == 'variables_get_reporter') {
            VAR = gen.scrape(child).VAR
        }
        if (VAR) {
            vars[gen.safe(VAR)] = true;
        }

    })
    let varstring = ''
    if (Object.keys(vars).length != 0) {
        varstring = `${I}global ${Object.keys(vars).join(',')}\n`
    }
    return varstring;
}
if (true) {
    Blockly.Python = new Blockly.Generator("Python");
    Blockly.Python.addReservedWords("False,None,True,and,as,assert,break,class,continue,def,del,elif,else,except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,or,pass,print,raise,return,try,while,with,yield,NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,ArithmeticError,AssertionError,AttributeError,BaseException,BlockingIOError,BrokenPipeError,BufferError,BytesWarning,ChildProcessError,ConnectionAbortedError,ConnectionError,ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,ImportWarning,IndentationError,IndexError,InterruptedError,IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,PermissionError,ProcessLookupError,RecursionError,ReferenceError,ResourceWarning,RuntimeError,RuntimeWarning,StandardError,StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,UnicodeDecodeError,UnicodeEncodeError,UnicodeError,UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,sum,super,tuple,type,unichr,unicode,vars,xrange,zip");
    Blockly.Python.ORDER_ATOMIC = 0;
    Blockly.Python.ORDER_COLLECTION = 1;
    Blockly.Python.ORDER_STRING_CONVERSION = 1;
    Blockly.Python.ORDER_MEMBER = 2.1;
    Blockly.Python.ORDER_FUNCTION_CALL = 2.2;
    Blockly.Python.ORDER_EXPONENTIATION = 3;
    Blockly.Python.ORDER_UNARY_SIGN = 4;
    Blockly.Python.ORDER_BITWISE_NOT = 4;
    Blockly.Python.ORDER_MULTIPLICATIVE = 5;
    Blockly.Python.ORDER_ADDITIVE = 6;
    Blockly.Python.ORDER_BITWISE_SHIFT = 7;
    Blockly.Python.ORDER_BITWISE_AND = 8;
    Blockly.Python.ORDER_BITWISE_XOR = 9;
    Blockly.Python.ORDER_BITWISE_OR = 10;
    Blockly.Python.ORDER_RELATIONAL = 11;
    Blockly.Python.ORDER_LOGICAL_NOT = 12;
    Blockly.Python.ORDER_LOGICAL_AND = 13;
    Blockly.Python.ORDER_LOGICAL_OR = 14;
    Blockly.Python.ORDER_CONDITIONAL = 15;
    Blockly.Python.ORDER_LAMBDA = 16;
    Blockly.Python.ORDER_NONE = 99;
    Blockly.Python.ORDER_OVERRIDES = [
        [Blockly.Python.ORDER_FUNCTION_CALL, Blockly.Python.ORDER_MEMBER],
        [Blockly.Python.ORDER_FUNCTION_CALL, Blockly.Python.ORDER_FUNCTION_CALL],
        [Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_MEMBER],
        [Blockly.Python.ORDER_MEMBER, Blockly.Python.ORDER_FUNCTION_CALL],
        [Blockly.Python.ORDER_LOGICAL_NOT, Blockly.Python.ORDER_LOGICAL_NOT],
        [Blockly.Python.ORDER_LOGICAL_AND, Blockly.Python.ORDER_LOGICAL_AND],
        [Blockly.Python.ORDER_LOGICAL_OR, Blockly.Python.ORDER_LOGICAL_OR]
    ];
    Blockly.Python.init = function (a) {
        Blockly.Python.PASS = this.INDENT + "pass\n";
        Blockly.Python.definitions_ = Object.create(null);
        Blockly.Python.functionNames_ = Object.create(null);
        Blockly.Python.variableDB_ ? Blockly.Python.variableDB_.reset() : Blockly.Python.variableDB_ = new Blockly.Names(Blockly.Python.RESERVED_WORDS_);
        Blockly.Python.variableDB_.setVariableMap(a.getVariableMap());
        for (var b = [], c = Blockly.Variables.allDeveloperVariables(a), d = 0; d < c.length; d++) b.push(Blockly.Python.variableDB_.getName(c[d], Blockly.Names.DEVELOPER_VARIABLE_TYPE) +
            " = None");
        a = Blockly.Variables.allUsedVarModels(a);
        for (d = 0; d < a.length; d++) b.push(Blockly.Python.variableDB_.getName(a[d].getId(), Blockly.Variables.NAME_TYPE) + " = None");
        Blockly.Python.definitions_.variables = b.join("\n")
    };
    Blockly.Python.finish = function (a) {
        var b = [],
            c = [],
            d;
        for (d in Blockly.Python.definitions_) {
            var e = Blockly.Python.definitions_[d];
            e.match(/^(from\s+\S+\s+)?import\s+\S+/) ? b.push(e) : c.push(e)
        }
        delete Blockly.Python.definitions_;
        delete Blockly.Python.functionNames_;
        Blockly.Python.variableDB_.reset();
        return (b.join("\n") + "\n\n" + c.join("\n\n")).replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a
    };
    Blockly.Python.scrubNakedValue = function (a) { return a + "\n" };
    Blockly.Python.quote_ = function (a) { a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/%/g, "\\%"); var b = "'"; - 1 !== a.indexOf("'") && (-1 === a.indexOf('"') ? b = '"' : a = a.replace(/'/g, "\\'")); return b + a + b };
    Blockly.Python.scrub_ = function (a, b) {
        var c = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
            var d = a.getCommentText();
            // (d = Blockly.utils.wrap(d, Blockly.Python.COMMENT_WRAP - 3)) && (c = a.getProcedureDef ? c + ('"""' + d + '\n"""\n') : c + Blockly.Python.prefixLines(d + "\n", "# "));
            for (var e = 0; e < a.inputList.length; e++) a.inputList[e].type == Blockly.INPUT_VALUE && (d = a.inputList[e].connection.targetBlock()) && (d = Blockly.Python.allNestedComments(d)) && (c += Blockly.Python.prefixLines(d, "# "))
        }
        e = a.nextConnection && a.nextConnection.targetBlock();
        e = Blockly.Python.blockToCode(e);
        return c + b + e
    };
    Blockly.Python.getAdjustedInt = function (a, b, c, d) {
        c = c || 0;
        a.workspace.options.oneBasedIndex && c--;
        var e = a.workspace.options.oneBasedIndex ? "1" : "0";
        a = Blockly.Python.valueToCode(a, b, c ? Blockly.Python.ORDER_ADDITIVE : Blockly.Python.ORDER_NONE) || e;
        Blockly.isNumber(a) ? (a = parseInt(a, 10) + c, d && (a = -a)) : (a = 0 < c ? "int(" + a + " + " + c + ")" : 0 > c ? "int(" + a + " - " + -c + ")" : "int(" + a + ")", d && (a = "-" + a));
        return a
    };
    Blockly.Python.colour = {};
    Blockly.Python.colour_picker = function (a) { return ["'" + a.getFieldValue("COLOUR") + "'", Blockly.Python.ORDER_ATOMIC] };
    Blockly.Python.colour_random = function (a) { Blockly.Python.definitions_.import_random = "import random"; return ["'#%06x' % random.randint(0, 2**24 - 1)", Blockly.Python.ORDER_FUNCTION_CALL] };
    Blockly.Python.colour_rgb = function (a) {
        var b = Blockly.Python.provideFunction_("colour_rgb", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(r, g, b):", "  r = round(min(100, max(0, r)) * 2.55)", "  g = round(min(100, max(0, g)) * 2.55)", "  b = round(min(100, max(0, b)) * 2.55)", "  return '#%02x%02x%02x' % (r, g, b)"]),
            c = Blockly.Python.valueToCode(a, "RED", Blockly.Python.ORDER_NONE) || 0,
            d = Blockly.Python.valueToCode(a, "GREEN", Blockly.Python.ORDER_NONE) || 0;
        a = Blockly.Python.valueToCode(a, "BLUE", Blockly.Python.ORDER_NONE) ||
            0;
        return [b + "(" + c + ", " + d + ", " + a + ")", Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.colour_blend = function (a) {
        var b = Blockly.Python.provideFunction_("colour_blend", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(colour1, colour2, ratio):", "  r1, r2 = int(colour1[1:3], 16), int(colour2[1:3], 16)", "  g1, g2 = int(colour1[3:5], 16), int(colour2[3:5], 16)", "  b1, b2 = int(colour1[5:7], 16), int(colour2[5:7], 16)", "  ratio = min(1, max(0, ratio))", "  r = round(r1 * (1 - ratio) + r2 * ratio)", "  g = round(g1 * (1 - ratio) + g2 * ratio)", "  b = round(b1 * (1 - ratio) + b2 * ratio)",
            "  return '#%02x%02x%02x' % (r, g, b)"
        ]),
            c = Blockly.Python.valueToCode(a, "COLOUR1", Blockly.Python.ORDER_NONE) || "'#000000'",
            d = Blockly.Python.valueToCode(a, "COLOUR2", Blockly.Python.ORDER_NONE) || "'#000000'";
        a = Blockly.Python.valueToCode(a, "RATIO", Blockly.Python.ORDER_NONE) || 0;
        return [b + "(" + c + ", " + d + ", " + a + ")", Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.lists = {};
    Blockly.Python.lists_create_empty = function (a) { return ["[]", Blockly.Python.ORDER_ATOMIC] };
    Blockly.Python.lists_create_with = function (a) { for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.Python.ORDER_NONE) || "None"; return ["[" + b.join(", ") + "]", Blockly.Python.ORDER_ATOMIC] };
    Blockly.Python.lists_repeat = function (a) {
        var b = Blockly.Python.valueToCode(a, "ITEM", Blockly.Python.ORDER_NONE) || "None";
        a = Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
        return ["[" + b + "] * " + a, Blockly.Python.ORDER_MULTIPLICATIVE]
    };
    Blockly.Python.lists_length = function (a) { return ["len(" + (Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "[]") + ")", Blockly.Python.ORDER_FUNCTION_CALL] };
    Blockly.Python.lists_isEmpty = function (a) { return ["not len(" + (Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "[]") + ")", Blockly.Python.ORDER_LOGICAL_NOT] };
    Blockly.Python.lists_indexOf = function (a) {
        var b = Blockly.Python.valueToCode(a, "FIND", Blockly.Python.ORDER_NONE) || "[]",
            c = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''";
        if (a.workspace.options.oneBasedIndex) var d = " 0",
            e = " + 1",
            f = "";
        else d = " -1", e = "", f = " - 1";
        if ("FIRST" == a.getFieldValue("END")) return a = Blockly.Python.provideFunction_("first_index", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(my_list, elem):", "  try: index = my_list.index(elem)" + e, "  except: index =" + d, "  return index"]),
            [a + "(" + c + ", " + b + ")", Blockly.Python.ORDER_FUNCTION_CALL];
        a = Blockly.Python.provideFunction_("last_index", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(my_list, elem):", "  try: index = len(my_list) - my_list[::-1].index(elem)" + f, "  except: index =" + d, "  return index"]);
        return [a + "(" + c + ", " + b + ")", Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.lists_getIndex = function (a) {
        var b = a.getFieldValue("MODE") || "GET",
            c = a.getFieldValue("WHERE") || "FROM_START",
            d = Blockly.Python.valueToCode(a, "VALUE", "RANDOM" == c ? Blockly.Python.ORDER_NONE : Blockly.Python.ORDER_MEMBER) || "[]";
        switch (c) {
            case "FIRST":
                if ("GET" == b) return [d + "[0]", Blockly.Python.ORDER_MEMBER];
                if ("GET_REMOVE" == b) return [d + ".pop(0)", Blockly.Python.ORDER_FUNCTION_CALL];
                if ("REMOVE" == b) return d + ".pop(0)\n";
                break;
            case "LAST":
                if ("GET" == b) return [d + "[-1]", Blockly.Python.ORDER_MEMBER];
                if ("GET_REMOVE" ==
                    b) return [d + ".pop()", Blockly.Python.ORDER_FUNCTION_CALL];
                if ("REMOVE" == b) return d + ".pop()\n";
                break;
            case "FROM_START":
                a = Blockly.Python.getAdjustedInt(a, "AT");
                if ("GET" == b) return [d + "[" + a + "]", Blockly.Python.ORDER_MEMBER];
                if ("GET_REMOVE" == b) return [d + ".pop(" + a + ")", Blockly.Python.ORDER_FUNCTION_CALL];
                if ("REMOVE" == b) return d + ".pop(" + a + ")\n";
                break;
            case "FROM_END":
                a = Blockly.Python.getAdjustedInt(a, "AT", 1, !0);
                if ("GET" == b) return [d + "[" + a + "]", Blockly.Python.ORDER_MEMBER];
                if ("GET_REMOVE" == b) return [d + ".pop(" + a + ")",
                Blockly.Python.ORDER_FUNCTION_CALL
                ];
                if ("REMOVE" == b) return d + ".pop(" + a + ")\n";
                break;
            case "RANDOM":
                Blockly.Python.definitions_.import_random = "import random";
                if ("GET" == b) return ["random.choice(" + d + ")", Blockly.Python.ORDER_FUNCTION_CALL];
                d = Blockly.Python.provideFunction_("lists_remove_random_item", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(myList):", "  x = int(random.random() * len(myList))", "  return myList.pop(x)"]) + "(" + d + ")";
                if ("GET_REMOVE" == b) return [d, Blockly.Python.ORDER_FUNCTION_CALL];
                if ("REMOVE" ==
                    b) return d + "\n"
        }
        throw "Unhandled combination (lists_getIndex).";
    };
    Blockly.Python.lists_setIndex = function (a) {
        var b = Blockly.Python.valueToCode(a, "LIST", Blockly.Python.ORDER_MEMBER) || "[]",
            c = a.getFieldValue("MODE") || "GET",
            d = a.getFieldValue("WHERE") || "FROM_START",
            e = Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE) || "None";
        switch (d) {
            case "FIRST":
                if ("SET" == c) return b + "[0] = " + e + "\n";
                if ("INSERT" == c) return b + ".insert(0, " + e + ")\n";
                break;
            case "LAST":
                if ("SET" == c) return b + "[-1] = " + e + "\n";
                if ("INSERT" == c) return b + ".append(" + e + ")\n";
                break;
            case "FROM_START":
                a = Blockly.Python.getAdjustedInt(a,
                    "AT");
                if ("SET" == c) return b + "[" + a + "] = " + e + "\n";
                if ("INSERT" == c) return b + ".insert(" + a + ", " + e + ")\n";
                break;
            case "FROM_END":
                a = Blockly.Python.getAdjustedInt(a, "AT", 1, !0);
                if ("SET" == c) return b + "[" + a + "] = " + e + "\n";
                if ("INSERT" == c) return b + ".insert(" + a + ", " + e + ")\n";
                break;
            case "RANDOM":
                Blockly.Python.definitions_.import_random = "import random";
                b.match(/^\w+$/) ? a = "" : (a = Blockly.Python.variableDB_.getDistinctName("tmp_list", Blockly.Variables.NAME_TYPE), d = a + " = " + b + "\n", b = a, a = d);
                d = Blockly.Python.variableDB_.getDistinctName("tmp_x",
                    Blockly.Variables.NAME_TYPE);
                a += d + " = int(random.random() * len(" + b + "))\n";
                if ("SET" == c) return a + (b + "[" + d + "] = " + e + "\n");
                if ("INSERT" == c) return a + (b + ".insert(" + d + ", " + e + ")\n")
        }
        throw "Unhandled combination (lists_setIndex).";
    };
    Blockly.Python.lists_getSublist = function (a) {
        var b = Blockly.Python.valueToCode(a, "LIST", Blockly.Python.ORDER_MEMBER) || "[]",
            c = a.getFieldValue("WHERE1"),
            d = a.getFieldValue("WHERE2");
        switch (c) {
            case "FROM_START":
                c = Blockly.Python.getAdjustedInt(a, "AT1");
                "0" == c && (c = "");
                break;
            case "FROM_END":
                c = Blockly.Python.getAdjustedInt(a, "AT1", 1, !0);
                break;
            case "FIRST":
                c = "";
                break;
            default:
                throw "Unhandled option (lists_getSublist)";
        }
        switch (d) {
            case "FROM_START":
                a = Blockly.Python.getAdjustedInt(a, "AT2", 1);
                break;
            case "FROM_END":
                a =
                    Blockly.Python.getAdjustedInt(a, "AT2", 0, !0);
                Blockly.isNumber(String(a)) ? "0" == a && (a = "") : (Blockly.Python.definitions_.import_sys = "import sys", a += " or sys.maxsize");
                break;
            case "LAST":
                a = "";
                break;
            default:
                throw "Unhandled option (lists_getSublist)";
        }
        return [b + "[" + c + " : " + a + "]", Blockly.Python.ORDER_MEMBER]
    };
    Blockly.Python.lists_sort = function (a) {
        var b = Blockly.Python.valueToCode(a, "LIST", Blockly.Python.ORDER_NONE) || "[]",
            c = a.getFieldValue("TYPE");
        a = "1" === a.getFieldValue("DIRECTION") ? "False" : "True";
        return [Blockly.Python.provideFunction_("lists_sort", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(my_list, type, reverse):", "  def try_float(s):", "    try:", "      return float(s)", "    except:", "      return 0", "  key_funcs = {", '    "NUMERIC": try_float,', '    "TEXT": str,', '    "IGNORE_CASE": lambda s: str(s).lower()',
            "  }", "  key_func = key_funcs[type]", "  list_cpy = list(my_list)", "  return sorted(list_cpy, key=key_func, reverse=reverse)"
        ]) + "(" + b + ', "' + c + '", ' + a + ")", Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.lists_split = function (a) {
        var b = a.getFieldValue("MODE");
        if ("SPLIT" == b) b = Blockly.Python.valueToCode(a, "INPUT", Blockly.Python.ORDER_MEMBER) || "''", a = Blockly.Python.valueToCode(a, "DELIM", Blockly.Python.ORDER_NONE), a = b + ".split(" + a + ")";
        else if ("JOIN" == b) b = Blockly.Python.valueToCode(a, "INPUT", Blockly.Python.ORDER_NONE) || "[]", a = Blockly.Python.valueToCode(a, "DELIM", Blockly.Python.ORDER_MEMBER) || "''", a = a + ".join(" + b + ")";
        else throw "Unknown mode: " + b;
        return [a, Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.lists_reverse = function (a) { return ["list(reversed(" + (Blockly.Python.valueToCode(a, "LIST", Blockly.Python.ORDER_NONE) || "[]") + "))", Blockly.Python.ORDER_FUNCTION_CALL] };
    Blockly.Python.logic = {};
    Blockly.Python.controls_if = function (a) {
        var b = 0,
            c = "";
        do {
            var d = Blockly.Python.valueToCode(a, "IF" + b, Blockly.Python.ORDER_NONE) || "False";
            var e = Blockly.Python.statementToCode(a, "DO" + b) || Blockly.Python.PASS;
            c += (0 == b ? "if " : "elif ") + d + ":\n" + e;
            ++b
        } while (a.getInput("IF" + b));
        a.getInput("ELSE") && (e = Blockly.Python.statementToCode(a, "ELSE") || Blockly.Python.PASS, c += "else:\n" + e);
        return c
    };
    Blockly.Python.controls_ifelse = Blockly.Python.controls_if;
    Blockly.Python.logic_compare = function (a) {
        var b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[a.getFieldValue("OP")],
            c = Blockly.Python.ORDER_RELATIONAL,
            d = Blockly.Python.valueToCode(a, "A", c) || "0";
        a = Blockly.Python.valueToCode(a, "B", c) || "0";
        return [d + " " + b + " " + a, c]
    };
    Blockly.Python.logic_operation = function (a) {
        var b = "AND" == a.getFieldValue("OP") ? "and" : "or",
            c = "and" == b ? Blockly.Python.ORDER_LOGICAL_AND : Blockly.Python.ORDER_LOGICAL_OR,
            d = Blockly.Python.valueToCode(a, "A", c);
        a = Blockly.Python.valueToCode(a, "B", c);
        if (d || a) {
            var e = "and" == b ? "True" : "False";
            d || (d = e);
            a || (a = e)
        } else a = d = "False";
        return [d + " " + b + " " + a, c]
    };
    Blockly.Python.logic_negate = function (a) { return ["not " + (Blockly.Python.valueToCode(a, "BOOL", Blockly.Python.ORDER_LOGICAL_NOT) || "True"), Blockly.Python.ORDER_LOGICAL_NOT] };
    Blockly.Python.logic_boolean = function (a) { return ["TRUE" == a.getFieldValue("BOOL") ? "True" : "False", Blockly.Python.ORDER_ATOMIC] };
    Blockly.Python.logic_null = function (a) { return ["None", Blockly.Python.ORDER_ATOMIC] };
    Blockly.Python.logic_ternary = function (a) {
        var b = Blockly.Python.valueToCode(a, "IF", Blockly.Python.ORDER_CONDITIONAL) || "False",
            c = Blockly.Python.valueToCode(a, "THEN", Blockly.Python.ORDER_CONDITIONAL) || "None";
        a = Blockly.Python.valueToCode(a, "ELSE", Blockly.Python.ORDER_CONDITIONAL) || "None";
        return [c + " if " + b + " else " + a, Blockly.Python.ORDER_CONDITIONAL]
    };
    Blockly.Python.loops = {};
    Blockly.Python.controls_repeat_ext = function (a) {
        var b = a.getField("TIMES") ? String(parseInt(a.getFieldValue("TIMES"), 10)) : Blockly.Python.valueToCode(a, "TIMES", Blockly.Python.ORDER_NONE) || "0";
        b = Blockly.isNumber(b) ? parseInt(b, 10) : "int(" + b + ")";
        var c = Blockly.Python.statementToCode(a, "DO");
        c = Blockly.Python.addLoopTrap(c, a.id) || Blockly.Python.PASS;
        return "for " + Blockly.Python.variableDB_.getDistinctName("count", Blockly.Variables.NAME_TYPE) + " in range(" + b + "):\n" + c
    };
    Blockly.Python.controls_repeat = Blockly.Python.controls_repeat_ext;
    Blockly.Python.controls_whileUntil = function (a) {
        var b = "UNTIL" == a.getFieldValue("MODE"),
            c = Blockly.Python.valueToCode(a, "BOOL", b ? Blockly.Python.ORDER_LOGICAL_NOT : Blockly.Python.ORDER_NONE) || "False",
            d = Blockly.Python.statementToCode(a, "DO");
        d = Blockly.Python.addLoopTrap(d, a.id) || Blockly.Python.PASS;
        b && (c = "not " + c);
        return "while " + c + ":\n" + d
    };
    Blockly.Python.controls_for = function (a) {
        var b = Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
            c = Blockly.Python.valueToCode(a, "FROM", Blockly.Python.ORDER_NONE) || "0",
            d = Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE) || "0",
            e = Blockly.Python.valueToCode(a, "BY", Blockly.Python.ORDER_NONE) || "1",
            f = Blockly.Python.statementToCode(a, "DO");
        f = Blockly.Python.addLoopTrap(f, a.id) || Blockly.Python.PASS;
        var g = "",
            h = function () {
                return Blockly.Python.provideFunction_("upRange",
                    ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(start, stop, step):", "  while start <= stop:", "    yield start", "    start += abs(step)"])
            },
            k = function () { return Blockly.Python.provideFunction_("downRange", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(start, stop, step):", "  while start >= stop:", "    yield start", "    start -= abs(step)"]) };
        a = function (a, b, c) { return "(" + a + " <= " + b + ") and " + h() + "(" + a + ", " + b + ", " + c + ") or " + k() + "(" + a + ", " + b + ", " + c + ")" };
        if (Blockly.isNumber(c) && Blockly.isNumber(d) &&
            Blockly.isNumber(e)) c = parseFloat(c), d = parseFloat(d), e = Math.abs(parseFloat(e)), 0 === c % 1 && 0 === d % 1 && 0 === e % 1 ? (c <= d ? (d++, a = 0 == c && 1 == e ? d : c + ", " + d, 1 != e && (a += ", " + e)) : (d--, a = c + ", " + d + ", -" + e), a = "range(" + a + ")") : (a = c < d ? h() : k(), a += "(" + c + ", " + d + ", " + e + ")");
        else {
            var l = function (a, c) {
                if (Blockly.isNumber(a)) a = parseFloat(a);
                else if (a.match(/^\w+$/)) a = "float(" + a + ")";
                else {
                    var d = Blockly.Python.variableDB_.getDistinctName(b + c, Blockly.Variables.NAME_TYPE);
                    g += d + " = float(" + a + ")\n";
                    a = d
                }
                return a
            };
            c = l(c, "_start");
            d = l(d, "_end");
            l(e, "_inc");
            a = "number" == typeof c && "number" == typeof d ? c < d ? h(c, d, e) : k(c, d, e) : a(c, d, e)
        }
        return g += "for " + b + " in " + a + ":\n" + f
    };
    Blockly.Python.controls_forEach = function (a) {
        var b = Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
            c = Blockly.Python.valueToCode(a, "LIST", Blockly.Python.ORDER_RELATIONAL) || "[]",
            d = Blockly.Python.statementToCode(a, "DO");
        d = Blockly.Python.addLoopTrap(d, a.id) || Blockly.Python.PASS;
        return "for " + b + " in " + c + ":\n" + d
    };
    Blockly.Python.controls_flow_statements = function (a) {
        switch (a.getFieldValue("FLOW")) {
            case "BREAK":
                return "break\n";
            case "CONTINUE":
                return "continue\n"
        }
        throw "Unknown flow statement.";
    };
    Blockly.Python.math = {};
    Blockly.Python.addReservedWords("math,random,Number");
    Blockly.Python.math_number = function (a) { a = parseFloat(a.getFieldValue("NUM")); if (Infinity == a) { a = 'float("inf")'; var b = Blockly.Python.ORDER_FUNCTION_CALL } else -Infinity == a ? (a = '-float("inf")', b = Blockly.Python.ORDER_UNARY_SIGN) : b = 0 > a ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC; return [a, b] };
    Blockly.Python.math_arithmetic = function (a) {
        var b = { ADD: [" + ", Blockly.Python.ORDER_ADDITIVE], MINUS: [" - ", Blockly.Python.ORDER_ADDITIVE], MULTIPLY: [" * ", Blockly.Python.ORDER_MULTIPLICATIVE], DIVIDE: [" / ", Blockly.Python.ORDER_MULTIPLICATIVE], POWER: [" ** ", Blockly.Python.ORDER_EXPONENTIATION] }[a.getFieldValue("OP")],
            c = b[0];
        b = b[1];
        var d = Blockly.Python.valueToCode(a, "A", b) || "0";
        a = Blockly.Python.valueToCode(a, "B", b) || "0";
        return [d + c + a, b]
    };
    Blockly.Python.math_single = function (a) {
        var b = a.getFieldValue("OP");
        if ("NEG" == b) { var c = Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_UNARY_SIGN) || "0"; return ["-" + c, Blockly.Python.ORDER_UNARY_SIGN] } Blockly.Python.definitions_.import_math = "import math";
        a = "SIN" == b || "COS" == b || "TAN" == b ? Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_MULTIPLICATIVE) || "0" : Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_NONE) || "0";
        switch (b) {
            case "ABS":
                c = "math.fabs(" + a + ")";
                break;
            case "ROOT":
                c = "math.sqrt(" +
                    a + ")";
                break;
            case "LN":
                c = "math.log(" + a + ")";
                break;
            case "LOG10":
                c = "math.log10(" + a + ")";
                break;
            case "EXP":
                c = "math.exp(" + a + ")";
                break;
            case "POW10":
                c = "math.pow(10," + a + ")";
                break;
            case "ROUND":
                c = "round(" + a + ")";
                break;
            case "ROUNDUP":
                c = "math.ceil(" + a + ")";
                break;
            case "ROUNDDOWN":
                c = "math.floor(" + a + ")";
                break;
            case "SIN":
                c = "math.sin(" + a + " / 180.0 * math.pi)";
                break;
            case "COS":
                c = "math.cos(" + a + " / 180.0 * math.pi)";
                break;
            case "TAN":
                c = "math.tan(" + a + " / 180.0 * math.pi)"
        }
        if (c) return [c, Blockly.Python.ORDER_FUNCTION_CALL];
        switch (b) {
            case "ASIN":
                c =
                    "math.asin(" + a + ") / math.pi * 180";
                break;
            case "ACOS":
                c = "math.acos(" + a + ") / math.pi * 180";
                break;
            case "ATAN":
                c = "math.atan(" + a + ") / math.pi * 180";
                break;
            default:
                throw "Unknown math operator: " + b;
        }
        return [c, Blockly.Python.ORDER_MULTIPLICATIVE]
    };
    Blockly.Python.math_constant = function (a) {
        var b = { PI: ["math.pi", Blockly.Python.ORDER_MEMBER], E: ["math.e", Blockly.Python.ORDER_MEMBER], GOLDEN_RATIO: ["(1 + math.sqrt(5)) / 2", Blockly.Python.ORDER_MULTIPLICATIVE], SQRT2: ["math.sqrt(2)", Blockly.Python.ORDER_MEMBER], SQRT1_2: ["math.sqrt(1.0 / 2)", Blockly.Python.ORDER_MEMBER], INFINITY: ["float('inf')", Blockly.Python.ORDER_ATOMIC] };
        a = a.getFieldValue("CONSTANT");
        "INFINITY" != a && (Blockly.Python.definitions_.import_math = "import math");
        return b[a]
    };
    Blockly.Python.math_number_property = function (a) {
        var b = Blockly.Python.valueToCode(a, "NUMBER_TO_CHECK", Blockly.Python.ORDER_MULTIPLICATIVE) || "0",
            c = a.getFieldValue("PROPERTY");
        if ("PRIME" == c) return Blockly.Python.definitions_.import_math = "import math", Blockly.Python.definitions_.from_numbers_import_Number = "from numbers import Number", [Blockly.Python.provideFunction_("math_isPrime", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(n):", "  # https://en.wikipedia.org/wiki/Primality_test#Naive_methods",
            "  # If n is not a number but a string, try parsing it.", "  if not isinstance(n, Number):", "    try:", "      n = float(n)", "    except:", "      return False", "  if n == 2 or n == 3:", "    return True", "  # False if n is negative, is 1, or not whole, or if n is divisible by 2 or 3.", "  if n <= 1 or n % 1 != 0 or n % 2 == 0 or n % 3 == 0:", "    return False", "  # Check all the numbers of form 6k +/- 1, up to sqrt(n).", "  for x in range(6, int(math.sqrt(n)) + 2, 6):", "    if n % (x - 1) == 0 or n % (x + 1) == 0:",
            "      return False", "  return True"
        ]) + "(" + b + ")", Blockly.Python.ORDER_FUNCTION_CALL];
        switch (c) {
            case "EVEN":
                var d = b + " % 2 == 0";
                break;
            case "ODD":
                d = b + " % 2 == 1";
                break;
            case "WHOLE":
                d = b + " % 1 == 0";
                break;
            case "POSITIVE":
                d = b + " > 0";
                break;
            case "NEGATIVE":
                d = b + " < 0";
                break;
            case "DIVISIBLE_BY":
                a = Blockly.Python.valueToCode(a, "DIVISOR", Blockly.Python.ORDER_MULTIPLICATIVE);
                if (!a || "0" == a) return ["False", Blockly.Python.ORDER_ATOMIC];
                d = b + " % " + a + " == 0"
        }
        return [d, Blockly.Python.ORDER_RELATIONAL]
    };
    Blockly.Python.math_change = function (a) {
        Blockly.Python.definitions_.from_numbers_import_Number = "from numbers import Number";
        var b = Blockly.Python.valueToCode(a, "DELTA", Blockly.Python.ORDER_ADDITIVE) || "0";
        a = Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
        return a + " = (" + a + " if isinstance(" + a + ", Number) else 0) + " + b + "\n"
    };
    Blockly.Python.math_round = Blockly.Python.math_single;
    Blockly.Python.math_trig = Blockly.Python.math_single;
    Blockly.Python.math_on_list = function (a) {
        var b = a.getFieldValue("OP");
        a = Blockly.Python.valueToCode(a, "LIST", Blockly.Python.ORDER_NONE) || "[]";
        switch (b) {
            case "SUM":
                b = "sum(" + a + ")";
                break;
            case "MIN":
                b = "min(" + a + ")";
                break;
            case "MAX":
                b = "max(" + a + ")";
                break;
            case "AVERAGE":
                Blockly.Python.definitions_.from_numbers_import_Number = "from numbers import Number";
                b = Blockly.Python.provideFunction_("math_mean", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(myList):", "  localList = [e for e in myList if isinstance(e, Number)]",
                    "  if not localList: return", "  return float(sum(localList)) / len(localList)"
                ]);
                b = b + "(" + a + ")";
                break;
            case "MEDIAN":
                Blockly.Python.definitions_.from_numbers_import_Number = "from numbers import Number";
                b = Blockly.Python.provideFunction_("math_median", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(myList):", "  localList = sorted([e for e in myList if isinstance(e, Number)])", "  if not localList: return", "  if len(localList) % 2 == 0:", "    return (localList[len(localList) // 2 - 1] + localList[len(localList) // 2]) / 2.0",
                    "  else:", "    return localList[(len(localList) - 1) // 2]"
                ]);
                b = b + "(" + a + ")";
                break;
            case "MODE":
                b = Blockly.Python.provideFunction_("math_modes", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(some_list):", "  modes = []", "  # Using a lists of [item, count] to keep count rather than dict", '  # to avoid "unhashable" errors when the counted item is itself a list or dict.', "  counts = []", "  maxCount = 1", "  for item in some_list:", "    found = False", "    for count in counts:", "      if count[0] == item:",
                    "        count[1] += 1", "        maxCount = max(maxCount, count[1])", "        found = True", "    if not found:", "      counts.append([item, 1])", "  for counted_item, item_count in counts:", "    if item_count == maxCount:", "      modes.append(counted_item)", "  return modes"
                ]);
                b = b + "(" + a + ")";
                break;
            case "STD_DEV":
                Blockly.Python.definitions_.import_math = "import math";
                b = Blockly.Python.provideFunction_("math_standard_deviation", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(numbers):", "  n = len(numbers)",
                    "  if n == 0: return", "  mean = float(sum(numbers)) / n", "  variance = sum((x - mean) ** 2 for x in numbers) / n", "  return math.sqrt(variance)"
                ]);
                b = b + "(" + a + ")";
                break;
            case "RANDOM":
                Blockly.Python.definitions_.import_random = "import random";
                b = "random.choice(" + a + ")";
                break;
            default:
                throw "Unknown operator: " + b;
        }
        return [b, Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.math_modulo = function (a) {
        var b = Blockly.Python.valueToCode(a, "DIVIDEND", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
        a = Blockly.Python.valueToCode(a, "DIVISOR", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
        return [b + " % " + a, Blockly.Python.ORDER_MULTIPLICATIVE]
    };
    Blockly.Python.math_constrain = function (a) {
        var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0",
            c = Blockly.Python.valueToCode(a, "LOW", Blockly.Python.ORDER_NONE) || "0";
        a = Blockly.Python.valueToCode(a, "HIGH", Blockly.Python.ORDER_NONE) || "float('inf')";
        return ["min(max(" + b + ", " + c + "), " + a + ")", Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.math_random_int = function (a) {
        Blockly.Python.definitions_.import_random = "import random";
        var b = Blockly.Python.valueToCode(a, "FROM", Blockly.Python.ORDER_NONE) || "0";
        a = Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE) || "0";
        return ["random.randint(" + b + ", " + a + ")", Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.math_random_float = function (a) { Blockly.Python.definitions_.import_random = "import random"; return ["random.random()", Blockly.Python.ORDER_FUNCTION_CALL] };
    Blockly.Python.procedures = {};
    Blockly.Python.procedures_defreturn = function (a) {
        for (var b = [], c, d = a.workspace, e = Blockly.Variables.allUsedVarModels(d) || [], f = 0; c = e[f]; f++) c = c.name, -1 == a.arguments_.indexOf(c) && b.push(Blockly.Python.variableDB_.getName(c, Blockly.Variables.NAME_TYPE));
        d = Blockly.Variables.allDeveloperVariables(d);
        for (f = 0; f < d.length; f++) b.push(Blockly.Python.variableDB_.getName(d[f], Blockly.Names.DEVELOPER_VARIABLE_TYPE));
        b = b.length ? Blockly.Python.INDENT + "global " + b.join(", ") + "\n" : "";
        d = Blockly.Python.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE);
        e = Blockly.Python.statementToCode(a, "STACK");
        Blockly.Python.STATEMENT_PREFIX && (f = a.id.replace(/\$/g, "$$$$"), e = Blockly.Python.prefixLines(Blockly.Python.STATEMENT_PREFIX.replace(/%1/g, "'" + f + "'"), Blockly.Python.INDENT) + e);
        Blockly.Python.INFINITE_LOOP_TRAP && (e = Blockly.Python.INFINITE_LOOP_TRAP.replace(/%1/g, '"' + a.id + '"') + e);
        (c = Blockly.Python.valueToCode(a, "RETURN", Blockly.Python.ORDER_NONE) || "") ? c = Blockly.Python.INDENT + "return " + c + "\n" : e || (e = Blockly.Python.PASS);
        var g = [];
        for (f = 0; f < a.arguments_.length; f++) g[f] =
            Blockly.Python.variableDB_.getName(a.arguments_[f], Blockly.Variables.NAME_TYPE);
        b = "def " + d + "(" + g.join(", ") + "):\n" + b + e + c;
        b = Blockly.Python.scrub_(a, b);
        Blockly.Python.definitions_["%" + d] = b;
        return null
    };
    Blockly.Python.procedures_defnoreturn = Blockly.Python.procedures_defreturn;
    Blockly.Python.procedures_callreturn = function (a) { for (var b = Blockly.Python.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), c = [], d = 0; d < a.arguments_.length; d++) c[d] = Blockly.Python.valueToCode(a, "ARG" + d, Blockly.Python.ORDER_NONE) || "None"; return [b + "(" + c.join(", ") + ")", Blockly.Python.ORDER_FUNCTION_CALL] };
    Blockly.Python.procedures_callnoreturn = function (a) { for (var b = Blockly.Python.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), c = [], d = 0; d < a.arguments_.length; d++) c[d] = Blockly.Python.valueToCode(a, "ARG" + d, Blockly.Python.ORDER_NONE) || "None"; return b + "(" + c.join(", ") + ")\n" };
    Blockly.Python.procedures_ifreturn = function (a) {
        var b = "if " + (Blockly.Python.valueToCode(a, "CONDITION", Blockly.Python.ORDER_NONE) || "False") + ":\n";
        a.hasReturnValue_ ? (a = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "None", b += Blockly.Python.INDENT + "return " + a + "\n") : b += Blockly.Python.INDENT + "return\n";
        return b
    };
    Blockly.Python.texts = {};
    Blockly.Python.text = function (a) { return [Blockly.Python.quote_(a.getFieldValue("TEXT")), Blockly.Python.ORDER_ATOMIC] };
    Blockly.Python.text_join = function (a) {
        switch (a.itemCount_) {
            case 0:
                return ["''", Blockly.Python.ORDER_ATOMIC];
            case 1:
                return ["str(" + (Blockly.Python.valueToCode(a, "ADD0", Blockly.Python.ORDER_NONE) || "''") + ")", Blockly.Python.ORDER_FUNCTION_CALL];
            case 2:
                var b = Blockly.Python.valueToCode(a, "ADD0", Blockly.Python.ORDER_NONE) || "''";
                a = Blockly.Python.valueToCode(a, "ADD1", Blockly.Python.ORDER_NONE) || "''";
                return ["str(" + b + ") + str(" + a + ")", Blockly.Python.ORDER_ADDITIVE];
            default:
                b = [];
                for (var c = 0; c < a.itemCount_; c++) b[c] =
                    Blockly.Python.valueToCode(a, "ADD" + c, Blockly.Python.ORDER_NONE) || "''";
                a = Blockly.Python.variableDB_.getDistinctName("x", Blockly.Variables.NAME_TYPE);
                a = "''.join([str(" + a + ") for " + a + " in [" + b.join(", ") + "]])";
                return [a, Blockly.Python.ORDER_FUNCTION_CALL]
        }
    };
    Blockly.Python.text_append = function (a) {
        var b = Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
        a = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE) || "''";
        return b + " = str(" + b + ") + str(" + a + ")\n"
    };
    Blockly.Python.text_length = function (a) { return ["len(" + (Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''") + ")", Blockly.Python.ORDER_FUNCTION_CALL] };
    Blockly.Python.text_isEmpty = function (a) { return ["not len(" + (Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "''") + ")", Blockly.Python.ORDER_LOGICAL_NOT] };
    Blockly.Python.text_indexOf = function (a) {
        var b = "FIRST" == a.getFieldValue("END") ? "find" : "rfind",
            c = Blockly.Python.valueToCode(a, "FIND", Blockly.Python.ORDER_NONE) || "''";
        b = (Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_MEMBER) || "''") + "." + b + "(" + c + ")";
        return a.workspace.options.oneBasedIndex ? [b + " + 1", Blockly.Python.ORDER_ADDITIVE] : [b, Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.text_charAt = function (a) {
        var b = a.getFieldValue("WHERE") || "FROM_START",
            c = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_MEMBER) || "''";
        switch (b) {
            case "FIRST":
                return [c + "[0]", Blockly.Python.ORDER_MEMBER];
            case "LAST":
                return [c + "[-1]", Blockly.Python.ORDER_MEMBER];
            case "FROM_START":
                return a = Blockly.Python.getAdjustedInt(a, "AT"), [c + "[" + a + "]", Blockly.Python.ORDER_MEMBER];
            case "FROM_END":
                return a = Blockly.Python.getAdjustedInt(a, "AT", 1, !0), [c + "[" + a + "]", Blockly.Python.ORDER_MEMBER];
            case "RANDOM":
                return Blockly.Python.definitions_.import_random =
                    "import random", [Blockly.Python.provideFunction_("text_random_letter", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(text):", "  x = int(random.random() * len(text))", "  return text[x];"]) + "(" + c + ")", Blockly.Python.ORDER_FUNCTION_CALL]
        }
        throw "Unhandled option (text_charAt).";
    };
    Blockly.Python.text_getSubstring = function (a) {
        var b = a.getFieldValue("WHERE1"),
            c = a.getFieldValue("WHERE2"),
            d = Blockly.Python.valueToCode(a, "STRING", Blockly.Python.ORDER_MEMBER) || "''";
        switch (b) {
            case "FROM_START":
                b = Blockly.Python.getAdjustedInt(a, "AT1");
                "0" == b && (b = "");
                break;
            case "FROM_END":
                b = Blockly.Python.getAdjustedInt(a, "AT1", 1, !0);
                break;
            case "FIRST":
                b = "";
                break;
            default:
                throw "Unhandled option (text_getSubstring)";
        }
        switch (c) {
            case "FROM_START":
                a = Blockly.Python.getAdjustedInt(a, "AT2", 1);
                break;
            case "FROM_END":
                a =
                    Blockly.Python.getAdjustedInt(a, "AT2", 0, !0);
                Blockly.isNumber(String(a)) ? "0" == a && (a = "") : (Blockly.Python.definitions_.import_sys = "import sys", a += " or sys.maxsize");
                break;
            case "LAST":
                a = "";
                break;
            default:
                throw "Unhandled option (text_getSubstring)";
        }
        return [d + "[" + b + " : " + a + "]", Blockly.Python.ORDER_MEMBER]
    };
    Blockly.Python.text_changeCase = function (a) { var b = { UPPERCASE: ".upper()", LOWERCASE: ".lower()", TITLECASE: ".title()" }[a.getFieldValue("CASE")]; return [(Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''") + b, Blockly.Python.ORDER_FUNCTION_CALL] };
    Blockly.Python.text_trim = function (a) { var b = { LEFT: ".lstrip()", RIGHT: ".rstrip()", BOTH: ".strip()" }[a.getFieldValue("MODE")]; return [(Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''") + b, Blockly.Python.ORDER_FUNCTION_CALL] };
    Blockly.Python.text_print = function (a) { return "print(" + (Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE) || "''") + ")\n" };
    Blockly.Python.text_prompt_ext = function (a) {
        var b = Blockly.Python.provideFunction_("text_prompt", ["def " + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + "(msg):", "  try:", "    return raw_input(msg)", "  except NameError:", "    return input(msg)"]),
            c = a.getField("TEXT") ? Blockly.Python.quote_(a.getFieldValue("TEXT")) : Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE) || "''";
        b = b + "(" + c + ")";
        "NUMBER" == a.getFieldValue("TYPE") && (b = "float(" + b + ")");
        return [b, Blockly.Python.ORDER_FUNCTION_CALL]
    };
    Blockly.Python.text_prompt = Blockly.Python.text_prompt_ext;
    Blockly.Python.text_count = function (a) {
        var b = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''";
        a = Blockly.Python.valueToCode(a, "SUB", Blockly.Python.ORDER_NONE) || "''";
        return [b + ".count(" + a + ")", Blockly.Python.ORDER_MEMBER]
    };
    Blockly.Python.text_replace = function (a) {
        var b = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''",
            c = Blockly.Python.valueToCode(a, "FROM", Blockly.Python.ORDER_NONE) || "''";
        a = Blockly.Python.valueToCode(a, "TO", Blockly.Python.ORDER_NONE) || "''";
        return [b + ".replace(" + c + ", " + a + ")", Blockly.Python.ORDER_MEMBER]
    };
    Blockly.Python.text_reverse = function (a) { return [(Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_MEMBER) || "''") + "[::-1]", Blockly.Python.ORDER_MEMBER] };
    Blockly.Python.variables = {};
    Blockly.Python.variables_get = function (a) { return [Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), Blockly.Python.ORDER_ATOMIC] };
    Blockly.Python.variables_set = function (a) { var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || "0"; return Blockly.Python.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE) + " = " + b + "\n" };
    Blockly.Python.variablesDynamic = {};
    Blockly.Python.variables_get_dynamic = Blockly.Python.variables_get;
    Blockly.Python.variables_set_dynamic = Blockly.Python.variables_set;
}
if (true) {
    Blockly.JavaScript = new Blockly.Generator("JavaScript");
    Blockly.JavaScript.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
    Blockly.JavaScript.ORDER_ATOMIC = 0;
    Blockly.JavaScript.ORDER_UNARY_POSTFIX = 1;
    Blockly.JavaScript.ORDER_UNARY_PREFIX = 2;
    Blockly.JavaScript.ORDER_MULTIPLICATIVE = 3;
    Blockly.JavaScript.ORDER_ADDITIVE = 4;
    Blockly.JavaScript.ORDER_SHIFT = 5;
    Blockly.JavaScript.ORDER_RELATIONAL = 6;
    Blockly.JavaScript.ORDER_EQUALITY = 7;
    Blockly.JavaScript.ORDER_BITWISE_AND = 8;
    Blockly.JavaScript.ORDER_BITWISE_XOR = 9;
    Blockly.JavaScript.ORDER_BITWISE_OR = 10;
    Blockly.JavaScript.ORDER_LOGICAL_AND = 11;
    Blockly.JavaScript.ORDER_LOGICAL_OR = 12;
    Blockly.JavaScript.ORDER_CONDITIONAL = 13;
    Blockly.JavaScript.ORDER_ASSIGNMENT = 14;
    Blockly.JavaScript.ORDER_NONE = 99;
    var profile = {
        arduino: {
            description: "JavaScript standard-compatible board",
            digital: [
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"],
                ["A0", "A0"],
                ["A1", "A1"],
                ["A2", "A2"],
                ["A3", "A3"],
                ["A4", "A4"],
                ["A5", "A5"]
            ],
            analog: [
                ["A0", "A0"],
                ["A1", "A1"],
                ["A2", "A2"],
                ["A3", "A3"],
                ["A4", "A4"],
                ["A5", "A5"]
            ],
            serial: 9600
        },
        arduino_mega: { description: "JavaScript Mega-compatible board" }
    };
    profile["default"] = profile.arduino;
    Blockly.JavaScript.init = function (a) {
        Blockly.JavaScript.definitions_ = Object.create(null);
        Blockly.JavaScript.setups_ = Object.create(null);
        Blockly.JavaScript.variableDB_ ? Blockly.JavaScript.variableDB_.reset() : Blockly.JavaScript.variableDB_ = new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_);
        var b = [];
        a = Blockly.Variables.allVariables(a);
        for (var c = 0; c < a.length; c++) b[c] = "int " + Blockly.JavaScript.variableDB_.getName(a[c], Blockly.Variables.NAME_TYPE) + ";\n";
        Blockly.JavaScript.definitions_.variables = b.join("\n")
    };
    Blockly.JavaScript.finish = function (a) {
        a = "  " + a.replace(/\n/g, "\n  ");
        a = a.replace(/\n\s+$/, "\n");
        a = "void loop() \n{\n" + a + "\n}";
        var b = [],
            c = [],
            d;
        for (d in Blockly.JavaScript.definitions_) {
            var e = Blockly.JavaScript.definitions_[d];
            e.match(/^#include/) ? b.push(e) : c.push(e)
        }
        e = [];
        for (d in Blockly.JavaScript.setups_) e.push(Blockly.JavaScript.setups_[d]);
        return (b.join("\n") + "\n\n" + c.join("\n") + "\nvoid setup() \n{\n  " + e.join("\n  ") + "\n}\n\n").replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a
    };
    Blockly.JavaScript.scrubNakedValue = function (a) { return a + ";\n" };
    Blockly.JavaScript.quote_ = function (a) { a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/\$/g, "\\$").replace(/'/g, "\\'"); return '"' + a + '"' };
    Blockly.JavaScript.scrub_ = function (a, b) {
        if (null === b) return "";
        var c = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
            var d = a.getCommentText();
            d && (c += Blockly.JavaScript.prefixLines(d, "// ") + "\n");
            for (var e = 0; e < a.inputList.length; e++) a.inputList[e].type == Blockly.INPUT_VALUE && (d = a.inputList[e].connection.targetBlock()) && (d = Blockly.JavaScript.allNestedComments(d)) && (c += Blockly.JavaScript.prefixLines(d, "// "))
        }
        e = a.nextConnection && a.nextConnection.targetBlock();
        e = Blockly.JavaScript.blockToCode(e);
        return c +
            b + e
    };
    Blockly.JavaScript.base = {};
    Blockly.JavaScript.base_delay = function () { return "delay(" + (Blockly.JavaScript.valueToCode(this, "DELAY_TIME", Blockly.JavaScript.ORDER_ATOMIC) || "1000") + ");\n" };
    Blockly.JavaScript.base_map = function () {
        var a = Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_NONE),
            b = Blockly.JavaScript.valueToCode(this, "DMAX", Blockly.JavaScript.ORDER_ATOMIC);
        return ["map(" + a + ", 0, 1024, 0, " + b + ")", Blockly.JavaScript.ORDER_NONE]
    };
    Blockly.JavaScript.inout_buildin_led = function () {
        var a = this.getFieldValue("STAT");
        Blockly.JavaScript.setups_.setup_output_13 = "pinMode(13, OUTPUT);";
        return "digitalWrite(13, " + a + ");\n"
    };
    Blockly.JavaScript.inout_digital_write = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.JavaScript.setups_["setup_output_" + a] = "pinMode(" + a + ", OUTPUT);";
        return "digitalWrite(" + a + ", " + b + ");\n"
    };
    Blockly.JavaScript.inout_digital_read = function () {
        var a = this.getFieldValue("PIN");
        Blockly.JavaScript.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.JavaScript.ORDER_ATOMIC]
    };
    Blockly.JavaScript.inout_analog_write = function () {
        var a = this.getFieldValue("PIN"),
            b = Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_ATOMIC);
        return "analogWrite(" + a + ", " + b + ");\n"
    };
    Blockly.JavaScript.inout_analog_read = function () { return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.JavaScript.ORDER_ATOMIC] };
    Blockly.JavaScript.inout_tone = function () {
        var a = this.getFieldValue("PIN"),
            b = Blockly.JavaScript.valueToCode(this, "NUM", Blockly.JavaScript.ORDER_ATOMIC);
        Blockly.JavaScript.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
        return "tone(" + a + ", " + b + ");\n"
    };
    Blockly.JavaScript.inout_notone = function () {
        var a = this.getFieldValue("PIN");
        Blockly.JavaScript.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
        return "noTone(" + a + ");\n"
    };
    Blockly.JavaScript.inout_highlow = function () { return ["HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW", Blockly.JavaScript.ORDER_ATOMIC] };
    Blockly.JavaScript.servo_move = function () {
        var a = this.getFieldValue("PIN"),
            b = Blockly.JavaScript.valueToCode(this, "DEGREE", Blockly.JavaScript.ORDER_ATOMIC);
        Blockly.JavaScript.definitions_.define_servo = "#include <Servo.h>\n";
        Blockly.JavaScript.definitions_["var_servo" + a] = "Servo servo_" + a + ";\n";
        Blockly.JavaScript.setups_["setup_servo_" + a] = "servo_" + a + ".attach(" + a + ");\n";
        return "servo_" + a + ".write(" + b + ");\n"
    };
    Blockly.JavaScript.servo_read_degrees = function () {
        var a = this.getFieldValue("PIN");
        Blockly.JavaScript.definitions_.define_servo = "#include &lt;Servo.h&gt;\n";
        Blockly.JavaScript.definitions_["var_servo" + a] = "Servo servo_" + a + ";\n";
        Blockly.JavaScript.setups_["setup_servo_" + a] = "servo_" + a + ".attach(" + a + ");\n";
        return "servo_" + a + ".read()"
    };
    Blockly.JavaScript.serial_print = function () {
        var a = Blockly.JavaScript.valueToCode(this, "CONTENT", Blockly.JavaScript.ORDER_ATOMIC) || "0";
        Blockly.JavaScript.setups_["setup_serial_" + profile["default"].serial] = "Serial.begin(" + profile["default"].serial + ");\n";
        return "Serial.println(" + a + ");\n"
    };
    Blockly.JavaScript.loops = {};
    Blockly.JavaScript.controls_for = function () {
        var a = Blockly.JavaScript.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
            b = Blockly.JavaScript.valueToCode(this, "FROM", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0",
            c = Blockly.JavaScript.valueToCode(this, "TO", Blockly.JavaScript.ORDER_ASSIGNMENT) || "0",
            d = Blockly.JavaScript.statementToCode(this, "DO");
        Blockly.JavaScript.INFINITE_LOOP_TRAP && (d = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + d);
        if (b.match(/^-?\d+(\.\d+)?$/) && c.match(/^-?\d+(\.\d+)?$/)) var e =
            parseFloat(b) <= parseFloat(c),
            d = "for (" + a + " = " + b + "; " + a + (e ? " <= " : " >= ") + c + "; " + a + (e ? "++" : "--") + ") {\n" + d + "}\n";
        else d = "", e = b, b.match(/^\w+$/) || b.match(/^-?\d+(\.\d+)?$/) || (e = Blockly.JavaScript.variableDB_.getDistinctName(a + "_start", Blockly.Variables.NAME_TYPE), d += "int " + e + " = " + b + ";\n"), b = c, c.match(/^\w+$/) || c.match(/^-?\d+(\.\d+)?$/) || (b = Blockly.JavaScript.variableDB_.getDistinctName(a + "_end", Blockly.Variables.NAME_TYPE), d += "int " + b + " = " + c + ";\n"), d += "for (" + a + " = " + e + ";\n    (" + e + " <= " + b + ") ? " + a +
            " <= " + b + " : " + a + " >= " + b + ";\n    " + a + " += (" + e + " <= " + b + ") ? 1 : -1) {\n" + branch0 + "}\n";
        return d
    };
    Blockly.JavaScript.controls_whileUntil = function () {
        var a = "UNTIL" == this.getFieldValue("MODE"),
            b = Blockly.JavaScript.valueToCode(this, "BOOL", a ? Blockly.JavaScript.ORDER_LOGICAL_NOT : Blockly.JavaScript.ORDER_NONE) || "false",
            c = Blockly.JavaScript.statementToCode(this, "DO");
        Blockly.JavaScript.INFINITE_LOOP_TRAP && (c = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + c);
        a && (b = "!" + b);
        return "while (" + b + ") {\n" + c + "}\n"
    };
    Blockly.JavaScript.grove = {};
    Blockly.JavaScript.grove_led = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.JavaScript.setups_["setup_green_led_" + a] = "pinMode(" + a + ", OUTPUT);";
        return "digitalWrite(" + a + "," + b + ");\n"
    };
    Blockly.JavaScript.grove_button = function () {
        var a = this.getFieldValue("PIN");
        Blockly.JavaScript.setups_["setup_button_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.JavaScript.ORDER_ATOMIC]
    };
    Blockly.JavaScript.grove_rotary_angle = function () { return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.JavaScript.ORDER_ATOMIC] };
    Blockly.JavaScript.grove_tilt_switch = function () {
        var a = this.getFieldValue("PIN");
        Blockly.JavaScript.setups_["setup_tilt_switch_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.JavaScript.ORDER_ATOMIC]
    };
    Blockly.JavaScript.grove_piezo_buzzer = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.JavaScript.setups_["setup_piezo_buzzer_" + a] = "pinMode(" + a + ", OUTPUT);";
        return "digitalWrite(" + a + "," + b + ");\n"
    };
    Blockly.JavaScript.grove_relay = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.JavaScript.setups_["setup_relay_" + a] = "pinMode(" + a + ", OUTPUT);";
        return "digitalWrite(" + a + "," + b + ");\n"
    };
    Blockly.JavaScript.grove_temporature_sensor = function () { var a = this.getFieldValue("PIN"); return ["round((1/(log((float)(1023-analogRead(" + a + "))*10000/analogRead(" + a + "))/10000)/3975+1/298.15)-273.15)", Blockly.JavaScript.ORDER_ATOMIC] };
    var _get_next_pin = function (a) {
        var b = a,
            b = parseInt(b) ? parseInt(a) + 1 : "A" + (parseInt(b.slice(1, b.length)) + 1);
        a = profile["default"].digital.length;
        for (var c = !0, d = 0; d < a; d++) profile["default"].digital[d][1] == b && (c = !1);
        return c ? (alert("Grove Sensor needs PIN#+1 port, current setting is out of bound."), null) : b
    };
    Blockly.JavaScript.grove_serial_lcd_print = function () {
        var a = this.getFieldValue("PIN"),
            b = Blockly.JavaScript.valueToCode(this, "TEXT", Blockly.JavaScript.ORDER_UNARY_POSTFIX) || "''",
            c = Blockly.JavaScript.valueToCode(this, "TEXT2", Blockly.JavaScript.ORDER_UNARY_POSTFIX) || "''",
            d = Blockly.JavaScript.valueToCode(this, "DELAY_TIME", Blockly.JavaScript.ORDER_ATOMIC) || "1000";
        Blockly.JavaScript.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
        Blockly.JavaScript.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
        var e =
            _get_next_pin(a);
        Blockly.JavaScript.definitions_["var_lcd_" + a] = "SerialLCD slcd_" + a + "(" + a + "," + e + ");\n";
        Blockly.JavaScript.setups_["setup_lcd_" + a] = "slcd_" + a + ".begin();\n";
        e = "slcd_" + a + ".backlight();\n" + ("slcd_" + a + ".setCursor(0,0);\n");
        e += "slcd_" + a + ".print(" + b + ");\n";
        e += "slcd_" + a + ".setCursor(0,1);\n";
        e += "slcd_" + a + ".print(" + c + ");\n";
        return e += "delay(" + d + ");\n"
    };
    Blockly.JavaScript.grove_serial_lcd_power = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.JavaScript.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
        Blockly.JavaScript.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
        var c = _get_next_pin(a);
        Blockly.JavaScript.definitions_["var_lcd" + a] = "SerialLCD slcd_" + a + "(" + a + "," + c + ");\n";
        a = "slcd_" + a;
        return "ON" === b ? a + ".Power();\n" : a + ".noPower();\n"
    };
    Blockly.JavaScript.grove_serial_lcd_effect = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.JavaScript.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
        Blockly.JavaScript.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
        var c = _get_next_pin(a);
        Blockly.JavaScript.definitions_["var_lcd" + a] = "SerialLCD slcd_" + a + "(" + a + "," + c + ");\n";
        a = "slcd_" + a;
        return "LEFT" === b ? a + ".scrollDisplayLeft();\n" : "RIGHT" === b ? a + ".scrollDisplayRight();\n" : a + ".autoscroll();\n"
    };
    Blockly.JavaScript.grove_sound_sensor = function () { return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.JavaScript.ORDER_ATOMIC] };
    Blockly.JavaScript.grove_pir_motion_sensor = function () {
        var a = this.getFieldValue("PIN");
        Blockly.JavaScript.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.JavaScript.ORDER_ATOMIC]
    };
    Blockly.JavaScript.grove_line_finder = function () {
        var a = this.getFieldValue("PIN");
        Blockly.JavaScript.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.JavaScript.ORDER_ATOMIC]
    };
    Blockly.JavaScript.grove_ultrasonic_ranger = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("UNIT");
        Blockly.JavaScript.definitions_.define_ultrasonic = "#include <Ultrasonic.h>\n";
        Blockly.JavaScript.definitions_["var_ultrasonic" + a] = "Ultrasonic ultrasonic_" + a + "(" + a + ");";
        return ["cm" === b ? "ultrasonic_" + a + ".MeasureInCentimeters()" : "ultrasonic_" + a + ".MeasureInInches()", Blockly.JavaScript.ORDER_ATOMIC]
    };
    Blockly.JavaScript.grove_motor_shield = function () {
        var a = this.getFieldValue("DIRECTION");
        Blockly.JavaScript.setups_.setup_motor = "pinMode(8,OUTPUT);//I1\n  pinMode(11,OUTPUT);//I2\n  pinMode(9,OUTPUT);//speedPinA\n  pinMode(12,OUTPUT);//I3\n  pinMode(13,OUTPUT);//i4\n  pinMode(10,OUTPUT);//speedPinB\n";
        var b = "";
        "forward" === a ? (Blockly.JavaScript.definitions_.define_forward = "void forward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n",
            b = "forward();\n") : "right" === a ? (Blockly.JavaScript.definitions_.define_right = "void right()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n\n", b = "right();\n") : "left" === a ? (Blockly.JavaScript.definitions_.define_left = "void left()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",
                b = "left();\n") : "backward" === a ? (Blockly.JavaScript.definitions_.define_backward = "void backward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n", b = "backward();\n") : "stop" === a && (Blockly.JavaScript.definitions_.define_stop = "void stop()\n{\ndigitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\ndigitalWrite(10,LOW);\ndelay(1000);\n}\n\n",
                    b = "stop();\n");
        return b
    };
    Blockly.JavaScript.grove_thumb_joystick = function () {
        var a = this.getFieldValue("PIN"),
            b = "0",
            b = "y" === this.getFieldValue("AXIS") ? _get_next_pin(a) : a;
        return ["analogRead(" + b + ")", Blockly.JavaScript.ORDER_ATOMIC]
    };
}
if (true) {
    Blockly.Arduino = new Blockly.Generator("Arduino");
    Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
    Blockly.Arduino.ORDER_ATOMIC = 0;
    Blockly.Arduino.ORDER_UNARY_POSTFIX = 1;
    Blockly.Arduino.ORDER_UNARY_PREFIX = 2;
    Blockly.Arduino.ORDER_MULTIPLICATIVE = 3;
    Blockly.Arduino.ORDER_ADDITIVE = 4;
    Blockly.Arduino.ORDER_SHIFT = 5;
    Blockly.Arduino.ORDER_RELATIONAL = 6;
    Blockly.Arduino.ORDER_EQUALITY = 7;
    Blockly.Arduino.ORDER_BITWISE_AND = 8;
    Blockly.Arduino.ORDER_BITWISE_XOR = 9;
    Blockly.Arduino.ORDER_BITWISE_OR = 10;
    Blockly.Arduino.ORDER_LOGICAL_AND = 11;
    Blockly.Arduino.ORDER_LOGICAL_OR = 12;
    Blockly.Arduino.ORDER_CONDITIONAL = 13;
    Blockly.Arduino.ORDER_ASSIGNMENT = 14;
    Blockly.Arduino.ORDER_NONE = 99;
    var profile = {
        arduino: {
            description: "Arduino standard-compatible board",
            digital: [
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"],
                ["6", "6"],
                ["7", "7"],
                ["8", "8"],
                ["9", "9"],
                ["10", "10"],
                ["11", "11"],
                ["12", "12"],
                ["13", "13"],
                ["A0", "A0"],
                ["A1", "A1"],
                ["A2", "A2"],
                ["A3", "A3"],
                ["A4", "A4"],
                ["A5", "A5"]
            ],
            analog: [
                ["A0", "A0"],
                ["A1", "A1"],
                ["A2", "A2"],
                ["A3", "A3"],
                ["A4", "A4"],
                ["A5", "A5"]
            ],
            serial: 9600
        },
        arduino_mega: { description: "Arduino Mega-compatible board" }
    };
    profile["default"] = profile.arduino;
    Blockly.Arduino.init = function (a) {
        Blockly.Arduino.definitions_ = Object.create(null);
        Blockly.Arduino.setups_ = Object.create(null);
        Blockly.Arduino.variableDB_ ? Blockly.Arduino.variableDB_.reset() : Blockly.Arduino.variableDB_ = new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);
        var b = [];
        a = Blockly.Variables.allVariables(a);
        for (var c = 0; c < a.length; c++) b[c] = "int " + Blockly.Arduino.variableDB_.getName(a[c], Blockly.Variables.NAME_TYPE) + ";\n";
        Blockly.Arduino.definitions_.variables = b.join("\n")
    };
    Blockly.Arduino.finish = function (a) {
        a = "  " + a.replace(/\n/g, "\n  ");
        a = a.replace(/\n\s+$/, "\n");
        a = "void loop() \n{\n" + a + "\n}";
        var b = [],
            c = [],
            d;
        for (d in Blockly.Arduino.definitions_) {
            var e = Blockly.Arduino.definitions_[d];
            e.match(/^#include/) ? b.push(e) : c.push(e)
        }
        e = [];
        for (d in Blockly.Arduino.setups_) e.push(Blockly.Arduino.setups_[d]);
        return (b.join("\n") + "\n\n" + c.join("\n") + "\nvoid setup() \n{\n  " + e.join("\n  ") + "\n}\n\n").replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a
    };
    Blockly.Arduino.scrubNakedValue = function (a) { return a + ";\n" };
    Blockly.Arduino.quote_ = function (a) { a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/\$/g, "\\$").replace(/'/g, "\\'"); return '"' + a + '"' };
    Blockly.Arduino.scrub_ = function (a, b) {
        if (null === b) return "";
        var c = "";
        if (!a.outputConnection || !a.outputConnection.targetConnection) {
            var d = a.getCommentText();
            d && (c += Blockly.Arduino.prefixLines(d, "// ") + "\n");
            for (var e = 0; e < a.inputList.length; e++) a.inputList[e].type == Blockly.INPUT_VALUE && (d = a.inputList[e].connection.targetBlock()) && (d = Blockly.Arduino.allNestedComments(d)) && (c += Blockly.Arduino.prefixLines(d, "// "))
        }
        e = a.nextConnection && a.nextConnection.targetBlock();
        e = Blockly.Arduino.blockToCode(e);
        return c +
            b + e
    };
    Blockly.Arduino.base = {};
    Blockly.Arduino.base_delay = function () { return "delay(" + (Blockly.Arduino.valueToCode(this, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC) || "1000") + ");\n" };
    Blockly.Arduino.base_map = function () {
        var a = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_NONE),
            b = Blockly.Arduino.valueToCode(this, "DMAX", Blockly.Arduino.ORDER_ATOMIC);
        return ["map(" + a + ", 0, 1024, 0, " + b + ")", Blockly.Arduino.ORDER_NONE]
    };
    Blockly.Arduino.inout_buildin_led = function () {
        var a = this.getFieldValue("STAT");
        Blockly.Arduino.setups_.setup_output_13 = "pinMode(13, OUTPUT);";
        return "digitalWrite(13, " + a + ");\n"
    };
    Blockly.Arduino.inout_digital_write = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.Arduino.setups_["setup_output_" + a] = "pinMode(" + a + ", OUTPUT);";
        return "digitalWrite(" + a + ", " + b + ");\n"
    };
    Blockly.Arduino.inout_digital_read = function () {
        var a = this.getFieldValue("PIN");
        Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.inout_analog_write = function () {
        var a = this.getFieldValue("PIN"),
            b = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
        return "analogWrite(" + a + ", " + b + ");\n"
    };
    Blockly.Arduino.inout_analog_read = function () { return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC] };
    Blockly.Arduino.inout_tone = function () {
        var a = this.getFieldValue("PIN"),
            b = Blockly.Arduino.valueToCode(this, "NUM", Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
        return "tone(" + a + ", " + b + ");\n"
    };
    Blockly.Arduino.inout_notone = function () {
        var a = this.getFieldValue("PIN");
        Blockly.Arduino.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
        return "noTone(" + a + ");\n"
    };
    Blockly.Arduino.inout_highlow = function () { return ["HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW", Blockly.Arduino.ORDER_ATOMIC] };
    Blockly.Arduino.servo_move = function () {
        var a = this.getFieldValue("PIN"),
            b = Blockly.Arduino.valueToCode(this, "DEGREE", Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_.define_servo = "#include <Servo.h>\n";
        Blockly.Arduino.definitions_["var_servo" + a] = "Servo servo_" + a + ";\n";
        Blockly.Arduino.setups_["setup_servo_" + a] = "servo_" + a + ".attach(" + a + ");\n";
        return "servo_" + a + ".write(" + b + ");\n"
    };
    Blockly.Arduino.servo_read_degrees = function () {
        var a = this.getFieldValue("PIN");
        Blockly.Arduino.definitions_.define_servo = "#include &lt;Servo.h&gt;\n";
        Blockly.Arduino.definitions_["var_servo" + a] = "Servo servo_" + a + ";\n";
        Blockly.Arduino.setups_["setup_servo_" + a] = "servo_" + a + ".attach(" + a + ");\n";
        return "servo_" + a + ".read()"
    };
    Blockly.Arduino.serial_print = function () {
        var a = Blockly.Arduino.valueToCode(this, "CONTENT", Blockly.Arduino.ORDER_ATOMIC) || "0";
        Blockly.Arduino.setups_["setup_serial_" + profile["default"].serial] = "Serial.begin(" + profile["default"].serial + ");\n";
        return "Serial.println(" + a + ");\n"
    };
    Blockly.Arduino.loops = {};
    Blockly.Arduino.controls_for = function () {
        var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
            b = Blockly.Arduino.valueToCode(this, "FROM", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
            c = Blockly.Arduino.valueToCode(this, "TO", Blockly.Arduino.ORDER_ASSIGNMENT) || "0",
            d = Blockly.Arduino.statementToCode(this, "DO");
        Blockly.Arduino.INFINITE_LOOP_TRAP && (d = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + d);
        if (b.match(/^-?\d+(\.\d+)?$/) && c.match(/^-?\d+(\.\d+)?$/)) var e =
            parseFloat(b) <= parseFloat(c),
            d = "for (" + a + " = " + b + "; " + a + (e ? " <= " : " >= ") + c + "; " + a + (e ? "++" : "--") + ") {\n" + d + "}\n";
        else d = "", e = b, b.match(/^\w+$/) || b.match(/^-?\d+(\.\d+)?$/) || (e = Blockly.Arduino.variableDB_.getDistinctName(a + "_start", Blockly.Variables.NAME_TYPE), d += "int " + e + " = " + b + ";\n"), b = c, c.match(/^\w+$/) || c.match(/^-?\d+(\.\d+)?$/) || (b = Blockly.Arduino.variableDB_.getDistinctName(a + "_end", Blockly.Variables.NAME_TYPE), d += "int " + b + " = " + c + ";\n"), d += "for (" + a + " = " + e + ";\n    (" + e + " <= " + b + ") ? " + a +
            " <= " + b + " : " + a + " >= " + b + ";\n    " + a + " += (" + e + " <= " + b + ") ? 1 : -1) {\n" + branch0 + "}\n";
        return d
    };
    Blockly.Arduino.controls_whileUntil = function () {
        var a = "UNTIL" == this.getFieldValue("MODE"),
            b = Blockly.Arduino.valueToCode(this, "BOOL", a ? Blockly.Arduino.ORDER_LOGICAL_NOT : Blockly.Arduino.ORDER_NONE) || "false",
            c = Blockly.Arduino.statementToCode(this, "DO");
        Blockly.Arduino.INFINITE_LOOP_TRAP && (c = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + c);
        a && (b = "!" + b);
        return "while (" + b + ") {\n" + c + "}\n"
    };
    Blockly.Arduino.grove = {};
    Blockly.Arduino.grove_led = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.Arduino.setups_["setup_green_led_" + a] = "pinMode(" + a + ", OUTPUT);";
        return "digitalWrite(" + a + "," + b + ");\n"
    };
    Blockly.Arduino.grove_button = function () {
        var a = this.getFieldValue("PIN");
        Blockly.Arduino.setups_["setup_button_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.grove_rotary_angle = function () { return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC] };
    Blockly.Arduino.grove_tilt_switch = function () {
        var a = this.getFieldValue("PIN");
        Blockly.Arduino.setups_["setup_tilt_switch_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.grove_piezo_buzzer = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.Arduino.setups_["setup_piezo_buzzer_" + a] = "pinMode(" + a + ", OUTPUT);";
        return "digitalWrite(" + a + "," + b + ");\n"
    };
    Blockly.Arduino.grove_relay = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.Arduino.setups_["setup_relay_" + a] = "pinMode(" + a + ", OUTPUT);";
        return "digitalWrite(" + a + "," + b + ");\n"
    };
    Blockly.Arduino.grove_temporature_sensor = function () { var a = this.getFieldValue("PIN"); return ["round((1/(log((float)(1023-analogRead(" + a + "))*10000/analogRead(" + a + "))/10000)/3975+1/298.15)-273.15)", Blockly.Arduino.ORDER_ATOMIC] };
    var _get_next_pin = function (a) {
        var b = a,
            b = parseInt(b) ? parseInt(a) + 1 : "A" + (parseInt(b.slice(1, b.length)) + 1);
        a = profile["default"].digital.length;
        for (var c = !0, d = 0; d < a; d++) profile["default"].digital[d][1] == b && (c = !1);
        return c ? (alert("Grove Sensor needs PIN#+1 port, current setting is out of bound."), null) : b
    };
    Blockly.Arduino.grove_serial_lcd_print = function () {
        var a = this.getFieldValue("PIN"),
            b = Blockly.Arduino.valueToCode(this, "TEXT", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
            c = Blockly.Arduino.valueToCode(this, "TEXT2", Blockly.Arduino.ORDER_UNARY_POSTFIX) || "''",
            d = Blockly.Arduino.valueToCode(this, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC) || "1000";
        Blockly.Arduino.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
        Blockly.Arduino.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
        var e =
            _get_next_pin(a);
        Blockly.Arduino.definitions_["var_lcd_" + a] = "SerialLCD slcd_" + a + "(" + a + "," + e + ");\n";
        Blockly.Arduino.setups_["setup_lcd_" + a] = "slcd_" + a + ".begin();\n";
        e = "slcd_" + a + ".backlight();\n" + ("slcd_" + a + ".setCursor(0,0);\n");
        e += "slcd_" + a + ".print(" + b + ");\n";
        e += "slcd_" + a + ".setCursor(0,1);\n";
        e += "slcd_" + a + ".print(" + c + ");\n";
        return e += "delay(" + d + ");\n"
    };
    Blockly.Arduino.grove_serial_lcd_power = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.Arduino.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
        Blockly.Arduino.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
        var c = _get_next_pin(a);
        Blockly.Arduino.definitions_["var_lcd" + a] = "SerialLCD slcd_" + a + "(" + a + "," + c + ");\n";
        a = "slcd_" + a;
        return "ON" === b ? a + ".Power();\n" : a + ".noPower();\n"
    };
    Blockly.Arduino.grove_serial_lcd_effect = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("STAT");
        Blockly.Arduino.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
        Blockly.Arduino.definitions_.define_softwareserial = "#include <SoftwareSerial.h>\n";
        var c = _get_next_pin(a);
        Blockly.Arduino.definitions_["var_lcd" + a] = "SerialLCD slcd_" + a + "(" + a + "," + c + ");\n";
        a = "slcd_" + a;
        return "LEFT" === b ? a + ".scrollDisplayLeft();\n" : "RIGHT" === b ? a + ".scrollDisplayRight();\n" : a + ".autoscroll();\n"
    };
    Blockly.Arduino.grove_sound_sensor = function () { return ["analogRead(" + this.getFieldValue("PIN") + ")", Blockly.Arduino.ORDER_ATOMIC] };
    Blockly.Arduino.grove_pir_motion_sensor = function () {
        var a = this.getFieldValue("PIN");
        Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.grove_line_finder = function () {
        var a = this.getFieldValue("PIN");
        Blockly.Arduino.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
        return ["digitalRead(" + a + ")", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.grove_ultrasonic_ranger = function () {
        var a = this.getFieldValue("PIN"),
            b = this.getFieldValue("UNIT");
        Blockly.Arduino.definitions_.define_ultrasonic = "#include <Ultrasonic.h>\n";
        Blockly.Arduino.definitions_["var_ultrasonic" + a] = "Ultrasonic ultrasonic_" + a + "(" + a + ");";
        return ["cm" === b ? "ultrasonic_" + a + ".MeasureInCentimeters()" : "ultrasonic_" + a + ".MeasureInInches()", Blockly.Arduino.ORDER_ATOMIC]
    };
    Blockly.Arduino.grove_motor_shield = function () {
        var a = this.getFieldValue("DIRECTION");
        Blockly.Arduino.setups_.setup_motor = "pinMode(8,OUTPUT);//I1\n  pinMode(11,OUTPUT);//I2\n  pinMode(9,OUTPUT);//speedPinA\n  pinMode(12,OUTPUT);//I3\n  pinMode(13,OUTPUT);//i4\n  pinMode(10,OUTPUT);//speedPinB\n";
        var b = "";
        "forward" === a ? (Blockly.Arduino.definitions_.define_forward = "void forward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n",
            b = "forward();\n") : "right" === a ? (Blockly.Arduino.definitions_.define_right = "void right()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n\n", b = "right();\n") : "left" === a ? (Blockly.Arduino.definitions_.define_left = "void left()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n",
                b = "left();\n") : "backward" === a ? (Blockly.Arduino.definitions_.define_backward = "void backward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n", b = "backward();\n") : "stop" === a && (Blockly.Arduino.definitions_.define_stop = "void stop()\n{\ndigitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\ndigitalWrite(10,LOW);\ndelay(1000);\n}\n\n",
                    b = "stop();\n");
        return b
    };
    Blockly.Arduino.grove_thumb_joystick = function () {
        var a = this.getFieldValue("PIN"),
            b = "0",
            b = "y" === this.getFieldValue("AXIS") ? _get_next_pin(a) : a;
        return ["analogRead(" + b + ")", Blockly.Arduino.ORDER_ATOMIC]
    };

    function hexToR(a) { return parseInt(cutHex(a).substring(0, 2), 16) }

    function hexToG(a) { return parseInt(cutHex(a).substring(2, 4), 16) }

    function hexToB(a) { return parseInt(cutHex(a).substring(4, 6), 16) }

    function cutHex(a) { return "#" == a.charAt(0) ? a.substring(1, 7) : a }

}

if (true) {
    Blockly.Python.INDENT = '\t'
    var I = Blockly.Python.INDENT
    // I = '\t'

    var dummy = (a) => { return a }
    var chalk = {
        magenta: dummy,
        yellow: dummy,
        red: dummy,
    }
    var gen = {}
    window.gen = gen
    window.symbols = {}
    gen.insight = {} // for debug
    gen.incode = {}
    gen.Blockly = Blockly
    gen.escape = function (str) {
        if (!str.includes('"')) return str
        return str.substring(1, str.length - 1)
    }

    gen.getAllField = function (block) {
        const listFields = [];
        for (var i = 0, input; input = block.inputList[i]; i++) {
            for (var j = 0, field; field = input.fieldRow[j]; j++) {
                listFields.push(field);
            }
        }
        return listFields;
    };
    gen.getAllInput = function (block) {
        const inputlist = [];
        for (var i = 0, input; input = block.inputList[i]; i++) {
            inputlist.push(input);
        }
        // This input does not exist.
        return inputlist;
    };

    gen.valueToCode = function (block, name, order) {
        if (isNaN(order)) {
            throw 'Expecting valid order from block "' + getSimulatedName(block.type) + '".';
        }
        var targetBlock = block.getInputTargetBlock(name);
        if (!targetBlock) {
            return '';
        }
        var tuple = this.blockToCode(targetBlock);
        if (tuple === '') {
            // Disabled block.
            return '';
        }

        if (!Array.isArray(tuple)) {
            // Value blocks must return code and order of operations info.
            // Statement blocks must only return code.
            throw 'Expecting tuple from value block "' + targetBlock.type + '".';
        }
        var code = tuple[0];
        var innerOrder = tuple[1];
        if (isNaN(innerOrder)) {
            throw 'Expecting valid order from value block "' + targetBlock.type + '".';
        }
        if (code && order <= innerOrder) {
            if (order == innerOrder && (order == 0 || order == 99)) {
                // Don't generate parens around NONE-NONE and ATOMIC-ATOMIC pairs.
                // 0 is the atomic order, 99 is the none order.  No parentheses needed.
                // In all known languages multiple such code blocks are not order
                // sensitive.  In fact in Python ('a' 'b') 'c' would fail.
            } else {
                // The operators outside this code are stonger than the operators
                // inside this code.  To prevent the code from being pulled apart,
                // wrap the code in parentheses.
                // Technically, this should be handled on a language-by-language basis.
                // However all known (sane) languages use parentheses for grouping.
                code = '(' + code + ')';
            }
        }
        return code;
    };

    gen._scrape_overrides = {}
    gen.scrape = function (block) {
        let db = {};
        // collect all data from FIELDS
        gen.getAllField(block).forEach(field => {
            const value = field.getValue()
            console.log("field/", block.type, field.name, value)
            if (field.name == 'VAR') { window.field = field }
            try {
                if (!isNaN(value)) {
                    db[field.name.toLowerCase()] = parseInt(value, 10)
                } else {
                    db[field.name.toLowerCase()] = `"${value}"`
                }
            }
            catch (err) {

            }
        })
        // console.log(db)

        // collect all data from VALUE_INPUT and STATEMENT (code)
        gen.getAllInput(block).forEach(input => {
            console.log('input/', block.type, input.name)
            if (input.type === Blockly.INPUT_VALUE) {
                const value = gen.valueToCode(block, input.name, Blockly.Python.ORDER_NONE)

                if (value === undefined || value === null || value.length === 0) {
                    if (block.hasOwnProperty('defaultValue') && block.defaultValue.hasOwnProperty(input.name)) {
                        db[input.name.toLowerCase()] = block.defaultValue[input.name.toLowerCase()]
                    } else {
                        // undefined default value, may cause error
                    }
                } else {
                    db[input.name.toLowerCase()] = value
                }

                // Converting the return if it is a JSON string
                if (typeof value === 'string' && value.startsWith('{')) {
                    // console.warn("IsJSONS")
                    db[input.name.toLowerCase()] = JSON.parse(value)
                } else {
                    // if it is a normal value block, it sill need to have the fields
                    // "code":"await(grobot.ReadLinePosition(&_tvar2))","static":[{"name":"_tvar2","type":"float"}]}
                    const curr = db[input.name.toLowerCase()]
                    db[input.name.toLowerCase()] = {
                        code: curr,
                        static: [],
                        precode: []
                    }
                }


            } else if (input.type === Blockly.NEXT_STATEMENT) {
                try {
                    let code
                    if (gen.makecode.target == 'micropython') {
                        code = Blockly.Python.statementToCode(
                            block, input.name
                        )
                    }
                    else if (gen.makecode.target == 'arduino') {
                        code = Blockly.Arduino.statementToCode(
                            block, input.name
                        )
                    }
                    else if (gen.makecode.target == 'javascript') {
                        code = Blockly.JavaScript.statementToCode(
                            block, input.name
                        )
                    }
                    db[input.name.toLowerCase()] = code
                    if (gen.isInteractive) {
                        if (db[input.name.toLowerCase()] === null || db[input.name.toLowerCase()].trim().length === 0) {
                            if (gen.makecode.target == 'micropython') {
                                // db[input.name.toLowerCase()] = `${I}pass\n`
                                db[input.name.toLowerCase()] = `${I}await ${gen.Symbol('uasyncio.sleep_ms')}(0)\n`
                            }
                            else if (gen.makecode.target == 'arduino') {
                                db[input.name.toLowerCase()] = `${I}pass();\n`
                            }
                            else if (gen.makecode.target == 'javascript') {
                                db[input.name.toLowerCase()] = `${I}await pass();\n`
                            }
                        }
                    }
                    else {
                        throw new Error("non interactive code not supported")
                    }
                } catch (err) {
                    console.log(chalk.red(`scrape: failed to codegen ${getSimulatedName(block.type)} at input ${input.name}`))
                    console.log(err)
                }

            }
        })


        for (const [k, v] of Object.entries(db)) {
            db[k.toLowerCase()] = v
            db[k.toUpperCase()] = v
        }

        // collect for debug purpose
        gen.insight[getSimulatedName(block.type)] = db
        console.log(`%cscrape/ ${block.type}`, 'color: green', db)
        window.scraper = window.scraper || {}
        window.scraper[block.type] = { block, db }

        if (gen._scrape_overrides.hasOwnProperty(block)) {
            var overrides = gen._scrape_overrides[block]
            console.warn(`gen.scaper: overriding: `, overrides)
            db = {
                ...db,
                ...overrides
            }
        }

        return db
    }

    gen.wrap = function (str) {
        return `"${str}"`
    }
    gen.bid = function (block) {
        /*
            we DO NOT want to send the full block id,
            that's why the block is mapped with the index
            to become an int16 namespace -> 2 byte per block
            this is to support 16k blocks count. 
        */
        // return `F(${gen.wrap(block.id.substring(0, 6))})`
        // return `0x${(gen.bidmap[block.id]+1).toString(16)}`

        /*
            Python Blocks, require both the root block and the block to create a thread
    
    
        */

        return `${gen.bidmap[block.id] + 1}, ${gen.rootbidmap[block.getRootBlock().id] + 1}`
    }
    gen.mapbid = function (workspace) {
        gen.rootbidmap = {}
        /*
            from a workspace, get all the block, sort the block id and index them
        	
        */
        // gen.bidmap 
        let list_bids = []
        workspace.getAllBlocks().forEach(block => {
            if (block.disabled) return;
            list_bids.push(block.id)
        })
        list_bids.sort()
        // convert to dictionary for faster lookup
        for (const [idx, bid] of Object.entries(list_bids)) {
            gen.bidmap[bid] = parseInt(idx, 10);
        }

        list_bids = []
        workspace.getTopBlocks().forEach(block => {
            if (block.disabled) return
            if (block.outputConnection != null) return;
            if (block.previousConnection != null || block.nextConnection != null) return;
            // console.log("TYPE", getSimulatedName(block.type))
            list_bids.push(block.id)
        })
        list_bids.sort()
        // convert to dictionary for faster lookup
        for (const [idx, bid] of Object.entries(list_bids)) {
            gen.rootbidmap[bid] = parseInt(idx, 10);
        }
        // console.log({ rootbidmap: gen.rootbidmap })
    }


    gen.build = function (makecode) {
        // console.log("building makecode")
        // build makecode blocks from shorthand syntax
        for (let [type, def] of Object.entries(makecode)) {
            // register the block shape, attributes
            // if (typeof def != 'object') continue

            let orgtype = type
            type = getSimulatedName(type)
            // console.log(`gen.${chalk.yellow('build')} ${chalk.magenta(type)}`)
            // console.log('build block', type, def)
            // console.log('parsing:', type)
            try {
                Blockly.Blocks[type] = {
                    init: function () {
                        // add internal fields
                        for (const item of def.block) {
                            const [t, id] = item.split('.')
                            if (t == 'field') {
                                this.appendDummyInput().appendField(new Blockly.FieldNumber(13), id)
                                // this.appendDummyInput().appendField(new Blockly.FieldNumber(), id.toUpperCase())
                            } else if (t == 'input') {
                                this.appendValueInput(id)
                                // this.appendValueInput(id.toUpperCase())
                            } else if (t == 'statement') {
                                this.appendStatementInput(id)
                                console.log(`rn/  gen.build.${type}`, id)
                                // this.appendStatementInput(id.toUpperCase())
                            }
                        }
                        // add outer shape, connection
                        if (def.type == 'value') {
                            this.setOutput(true);
                        } else if (def.type == 'event') {

                        } else {
                            this.setPreviousStatement(true)
                            this.setNextStatement(true)
                        }
                    },
                    def: def,
                }

                // if we has not defined the python, create a placeholder for now

                if (!def.hasOwnProperty('python')) {
                    if (def.type == 'value') {
                        Blockly.Python[type] = function (block) {
                            return [`'''missing: ${getSimulatedName(block.type)}'''`, Blockly.Python.ORDER_NONE]
                        }
                    } else {
                        Blockly.Python[type] = function (block) {
                            return `'''missing: ${getSimulatedName(block.type)}'''\n`
                        }
                    }
                }
                else {
                    // wrapper for value block
                    // console.log('define micropython')
                    try {
                        if (def.type == 'value') {
                            Blockly.Python[type] = function (block) {
                                // console.log(`ard: ${chalk.yellow(getSimulatedName(block.type))}\t${block.id}`)
                                const re = def.python(block)
                                // if the defined python method didn't return valid, fallback value
                                if (re === undefined) {
                                    return [`# no_return_value ${getSimulatedName(block.type)} */`, Blockly.Python.ORDER_NONE]
                                }
                                return [re[0], re[1]]

                            }
                        }
                        // wrapper for event block
                        else if (def.type == 'event') {
                            Blockly.Python[type] = function (block) {
                                // console.log(`ard: ${chalk.yellow(getSimulatedName(block.type))}\t${block.id}`)
                                const re = def.python(block)
                                if (re === undefined) {
                                    return `# no_return_event ${getSimulatedName(block.type)} */`
                                }
                                return re
                            }
                        }
                        // wrapper for action block
                        else {
                            Blockly.Python[type] = function (block) {
                                const re = def.python(block)
                                if (re === undefined) {
                                    return `# no_return_action ${getSimulatedName(block.type)} */\n`
                                }
                                return re
                            }
                        }
                    } catch (err) {
                        console.error("Problem in generating the code", type, err)
                    }
                }

                if (!def.hasOwnProperty('arduino')) {
                    if (def.type == 'value') {
                        Blockly.Arduino[type] = function (block) {
                            return [`// missing: ${getSimulatedName(block.type)} */`, Blockly.Python.ORDER_NONE]
                        }
                    } else {
                        Blockly.Arduino[type] = function (block) {
                            return `// missing: ${getSimulatedName(block.type)} */\n`
                        }
                    }
                }
                else {
                    // console.log('define arduino')
                    try {
                        if (def.type == 'value') {
                            Blockly.Arduino[type] = function (block) {
                                // console.log(`ard: ${chalk.yellow(getSimulatedName(block.type))}\t${block.id}`)
                                const re = def.arduino(block)
                                // if the defined python method didn't return valid, fallback value
                                if (re === undefined) {
                                    return [`// no_return_value ${getSimulatedName(block.type)} */`, Blockly.Python.ORDER_NONE]
                                }
                                return [re[0], re[1]]

                            }
                        }
                        // wrapper for event block
                        else if (def.type == 'event') {
                            Blockly.Arduino[type] = function (block) {
                                // console.log(`ard: ${chalk.yellow(getSimulatedName(block.type))}\t${block.id}`)
                                const re = def.arduino(block)
                                if (re === undefined) {
                                    return `// no_return_event ${getSimulatedName(block.type)} */`
                                }
                                return re
                            }
                        }
                        // wrapper for action block
                        else {
                            // console.log('c', re)
                            // console.log("DEFINED ACTION")
                            Blockly.Arduino[type] = function (block) {
                                const re = def.arduino(block)
                                if (re === undefined) {
                                    return `// no_return_action ${getSimulatedName(block.type)} */\n`
                                }
                                return re
                            }
                        }
                    } catch (err) {
                        console.error("Problem in generating the code", type, err)
                    }
                }



                if (!def.hasOwnProperty('javascript')) {
                    if (def.type == 'value') {
                        Blockly.JavaScript[type] = function (block) {
                            return [`// missing: ${getSimulatedName(block.type)} */`, Blockly.Python.ORDER_NONE]
                        }
                    } else {
                        Blockly.JavaScript[type] = function (block) {
                            return `// missing: ${getSimulatedName(block.type)} */\n`
                        }
                    }
                }
                else {
                    // console.log('define arduino')
                    try {
                        if (def.type == 'value') {
                            Blockly.JavaScript[type] = function (block) {
                                // console.log(`ard: ${chalk.yellow(getSimulatedName(block.type))}\t${block.id}`)
                                const re = def.javascript(block)
                                // if the defined python method didn't return valid, fallback value
                                if (re === undefined) {
                                    return [`// no_return_value ${getSimulatedName(block.type)} */`, Blockly.Python.ORDER_NONE]
                                }
                                return [re[0], re[1]]

                            }
                        }
                        // wrapper for event block
                        else if (def.type == 'event') {
                            Blockly.JavaScript[type] = function (block) {
                                // console.log(`ard: ${chalk.yellow(getSimulatedName(block.type))}\t${block.id}`)
                                const re = def.javascript(block)
                                if (re === undefined) {
                                    return `// no_return_event ${getSimulatedName(block.type)} */`
                                }
                                return re
                            }
                        }
                        // wrapper for action block
                        else {
                            // console.log('c', re)
                            // console.log("DEFINED ACTION")
                            Blockly.JavaScript[type] = function (block) {
                                const re = def.javascript(block)
                                if (re === undefined) {
                                    return `// no_return_action ${getSimulatedName(block.type)} */\n`
                                }
                                return re
                            }
                        }
                    } catch (err) {
                        console.error("Problem in generating the code", type, err)
                    }
                }

                // create a wrapper of blockToCode call for .python method

            } catch (err) {
                console.error("failed", err, type)
            }
        }
        for (const [k, v] of Object.entries(Blockly.Python)) {
            Blockly.Python[k.replace('simulated_', '')] = v
        }

        console.log()
    }

    gen.getTopBlocks = function (workspace) {
        const roots = [];
        workspace.getTopBlocks().forEach(block => {
            if (block.previousConnection != null) return;
            if (block.nextConnection != null) return;
            if (block.outputConnection != null) return;
            roots.push(block)
        })
        return roots
    }

    gen.tvar_store = {};
    gen.tvar_id = 0;
    gen.reset = function () {
        gen.grobot_set_mode = false
        gen.grobot_set_programe = '"Programe.Programe_1"'
        gen.known_networks = {}
        gen.bidmap = {}
        gen.tvar_store = {};
        gen.tvar_id = 0;
        gen.insight = {}
        gen.section = {
            import: [], // import lirary
            variable: [], // declare user variable
            static: [], // declare static variable
            object: [], // declare object
            symbols: [], // symbolic object
            task: [], // declare task (coroutines)
            event: [], // assigning callback, inside the setup
            setup: [], // code that run setup (grobot_program)
            loop: [], // code that loop (grobot_loop + coroutine.runCoroutine)
            routine: [], // task that start after grobot program is done
        }
        // console.clear()
    }
    gen.reset()


    gen._blockToCode = function (block) {
        if (!block) {
            console.log(`blockToCode`, block, 'not a block')

            return ''
        }
        if (block.disabled) {
            console.log(`blockToCode`, getSimulatedName(block.type), 'disabled')
            return gen.blockToCode(block.getNextBlock())
        }

        var func = null
        if (gen.makecode.target == 'micropython') {
            func = Blockly.Python[getSimulatedName(block.type)]
        }
        else if (gen.makecode.target == 'arduino') {
            func = Blockly.Arduino[getSimulatedName(block.type)]
        }
        else if (gen.makecode.target == 'javascript') {
            func = Blockly.JavaScript[getSimulatedName(block.type)]
        }
        if (func == null) {
            console.log(`gen.${chalk.red('blockToCode')} missing generator for ${chalk.magenta(getSimulatedName(block.type))}`)
        }
        var code = func.call(block, block)
        if (Array.isArray(code)) {
            // console.log(`blockToCode`, getSimulatedName(block.type), 'return array')

            return [Blockly.Python.scrub_(block, code[0]), code[1]]
        } else if (code === null) {
            console.log(`gen.${chalk.red('blockToCode')} return null for ${chalk.magenta(getSimulatedName(block.type))}`)
        } else {
            console.log(`blockToCode`, getSimulatedName(block.type), 'return none', code)

            // handle all other case for block generators
            return code
        }

    }
    gen.blockToCode = function (block) {
        console.log(`%cbtc/ ${block.type}`, 'color: magenta')
        const code = gen._blockToCode(block)
        gen.incode[`${getSimulatedName(block.type)}:${block.id.substring(0, 3)}`] = code
        // console.log("gencode", JSON.stringify(code))
        // console.log(`gen.${chalk.yellow('block')} ${chalk.magenta(getSimulatedName(block.type))} [${code}]`)
        return code
    }
    gen.isInteractive = true
    gen.workspaceToCode = function ({ workspace, interactive, language }) {
        console.groupCollapsed('code.generator')

        window.getWorkspaceProps()
        gen.workspace = workspace
        // gen.isInteractive = interactive === true

        gen.build(gen.makecode)
        gen.reset()
        gen.mapbid(workspace);


        // PROGRAM_USE_BUTTON flag setting
        // let program_use_button = false;

        workspace.getTopBlocks(true).forEach(block => {
            // if (getSimulatedName(block.type) === null) return
            if (block.disabled) return
            if (getSimulatedName(block.type) === null) return
            if (getSimulatedName(block.type) == 'grobot_button_value' || getSimulatedName(block.type) == 'grobot_button_callback') {
                program_use_button = true;
            }

            try {
                // console.log('Blockly.Python.call', block)
                if (language == 'micropython') {
                    console.log('callingMicroPython', getSimulatedName(block.type))
                    Blockly.Python[getSimulatedName(block.type)].call(block, block)
                }

                else if (language == 'arduino') {
                    console.log('callingArduino', getSimulatedName(block.type))
                    Blockly.Arduino[getSimulatedName(block.type)].call(block, block)
                }
                else if (language == 'javascript') {
                    console.log('callingJavaScript', getSimulatedName(block.type))
                    Blockly.JavaScript[getSimulatedName(block.type)].call(block, block)
                }
            } catch (err) {
                console.error('blockToCode', chalk.red(`${language}::${getSimulatedName(block.type)}`), err)
            }
        })


        let code = []
        gen.workspace.getAllVariables().forEach(variable => {
            if (language == 'micropython') {
                gen.Variable(`${gen.safe(variable.name)} = 0 # ${variable.name}`)
            }
            else if (language == 'arduino') {
                gen.Variable(`int ${gen.safe(variable.name)} = 0;`)
            }
            else if (language == 'javascript') {
                gen.Variable(`window.usr.${gen.safe(variable.name)} = 0;`)
            }
            // TODO : Please add variable.type to support String
        })



        gen.section.import.sort()
        gen.section.variable.sort()
        gen.section.static.sort()
        gen.section.object.sort()
        gen.section.symbols.sort()
        gen.section.task.sort()
        gen.section.event.sort()
        gen.section.setup.sort()
        gen.section.loop.sort()
        gen.section.routine.sort()

        if (language == 'micropython') {
            // gen.Import('from garastem import *')
            gen.Import('import gc;gc.collect()')
            gen.Import('import interactive')
            gen.Import('import board')
            gen.Import('import uasyncio')
            gen.Import('from constants import *')

            gen.Import('import flag')
            if (gen.grobot_set_mode) {
                gen.Setup('flag.set(flag.PROGRAME_ONSTART)\n')
            }
            else {
                gen.Setup('flag.remove(flag.PROGRAME_ONSTART)\n')
            }
            gen.Import('import usercode')
            //! migrated to marking only
            // gen.Setup(`usercode.save(${window.port_map[gen.grobot_set_programe]})\n`)




            var CMT;
            if (language == 'micropython') {
                CMT = '# '
            }
            if (gen.section.import.length) {
                code.push(`${CMT} GaraBlock: Start of Import Section`)
                code.push(...gen.section.import)
            }
            if (gen.section.variable.length) {
                code.push(`${CMT} GaraBlock: Start of User Variable Section`)
                code.push(...gen.section.variable)
            }
            if (gen.section.static.length && gen.isInteractive === true) {
                code.push(`${CMT} GaraBlock: Start of Static Variable Section`)
                code.push(...gen.section.static)
            }
            if (gen.section.object.length) {
                code.push(`${CMT} GaraBlock: Start of Object Definition Section`)
                code.push(...gen.section.object)
            }
            if (gen.section.symbols.length) {
                code.push(`${CMT} GaraBlock: Start of Symbolic Section`)
                code.push(...gen.section.symbols)
            }
            if (gen.section.task.length) {
                code.push(`${CMT} GaraBlock: Start of Task Section`)
                // task that have 'usercode_begin' will append the lines
                // First, create the routine script


                for (let i = 0; i < gen.section.task.length; i++) {
                    var c = gen.section.task[i]
                    // append the rooutine line
                    if (c.includes('usercode_begin')) {
                        gen.section.routine.forEach(routine => {
                            gen.section.task[i] += Blockly.Python.INDENT + routine + '\n'
                        })
                    }
                }

                code.push(...gen.section.task)
            }
            if (gen.section.setup.length || true) {
                if (language == 'micropython') {
                    let setup_code = gen.section.setup.join('')
                    if (setup_code.length) setup_code = Blockly.Python.prefixLines(setup_code, I)
                    if (setup_code.trim().length == 0) setup_code = I + 'pass\n'
                    code.push(`async def usercode_setup():\n${setup_code}`)
                }
                else if (language == 'arduino') {
                    let setup_code = gen.section.setup.join('')
                    if (setup_code.length) setup_code = Blockly.Python.prefixLines(setup_code, I)
                    if (setup_code.trim().length == 0) setup_code = I + 'pass();\n'
                    code.push(`void usercode_setup(){\n${setup_code}}`)
                }
            }
            if (gen.section.loop.length || true) {
                // let loop_code = gen.section.loop.join('')
                // if (loop_code.length) loop_code = Blockly.Python.prefixLines(loop_code, I)
                // code.push(`async def usercode_loop():\n${I}pass\n${loop_code}`)


                if (language == 'micropython') {
                    let loop_code = gen.section.loop.join('')
                    if (loop_code.length) loop_code = Blockly.Python.prefixLines(loop_code, I)
                    if (loop_code.trim().length == 0) loop_code = I + 'pass\n'
                    code.push(`async def usercode_loop():\n${loop_code}`)
                }
                else if (language == 'arduino') {
                    let loop_code = gen.section.loop.join('')
                    if (loop_code.length) loop_code = Blockly.Python.prefixLines(loop_code, I)
                    if (loop_code.trim().length == 0) loop_code = I + 'pass();\n'
                    code.push(`void usercode_loop(){\n${loop_code}}`)
                }

            }

            code = code.join('\n')

            // Generate the signature for this codebase
            // var hash = crypto.createHash('md5').update(code).digest('hex');

            // console.warn("Insights", gen.insight)
            // console.warn("Variables", gen.workspace.getAllVariables())

        }
        else if (language == 'arduino') {
            gen.Import('#include "GaraSTEM.h"')
            gen.Import('#include "GRobotDevice.h"')
            gen.Import('#include "GRobotMovements.h"')
            gen.Import('#include "ModeButton.h"')
            gen.Import('#include "GSensorFL5.h"')
            gen.Import('#include "GRobotSound.h"')
            gen.Import('#include "GRobotTimer.h"')
            gen.Import('#include "GRobotDisplay.h"')


            code = gen.makecode.code_template
                .replace('/*###IMPORT###*/', gen.section.import.join('\n'))
                .replace('/*###VARIABLE###*/', gen.section.variable.join('\n'))
                .replace('/*###STATIC###*/', gen.section.static.join('\n'))
                .replace('/*###OBJECT###*/', gen.section.object.join('\n'))
                .replace('/*###TASK###*/', gen.section.task.join('\n'))
                .replace('/*###EVENT###*/', gen.section.event.join('\n'))
                .replace('/*###BEGIN###*/', gen.section.setup.join('\n'))
                // .replace('/*###SETUP###*/', gen.section.setup.join('\n'))
                .replace('/*###LOOP###*/', gen.section.loop.join('\n'))
                .replace('/*###UPLOADID###*/', String(Math.floor(Math.random() * 16000)))

        }
        else if (language == 'javascript') {
            // gen.Import('#include "GaraSTEM.h"')
            // gen.Import('#include "GRobotDevice.h"')
            // gen.Import('#include "GRobotMovements.h"')
            // gen.Import('#include "ModeButton.h"')
            // gen.Import('#include "GSensorFL5.h"')
            // gen.Import('#include "GRobotSound.h"')
            // gen.Import('#include "GRobotTimer.h"')
            // gen.Import('#include "GRobotDisplay.h"')
            const precode = fs.readFileSync('generator_stream.js', { encoding: 'utf8' })
            const javascript_template = precode
            code = javascript_template
                .replace('/*###IMPORT###*/', gen.section.import.join('\n'))
                .replace('/*###VARIABLE###*/', gen.section.variable.join('\n'))
                .replace('/*###STATIC###*/', gen.section.static.join('\n'))
                .replace('/*###OBJECT###*/', gen.section.object.join('\n'))
                .replace('/*###TASK###*/', gen.section.task.join('\n'))
                .replace('/*###EVENT###*/', gen.section.event.join('\n'))
                .replace('/*###BEGIN###*/', gen.section.setup.join('\n'))
                // .replace('/*###SETUP###*/', gen.section.setup.join('\n'))
                .replace('/*###LOOP###*/', gen.section.loop.join('\n'))
                .replace('/*###UPLOADID###*/', String(Math.floor(Math.random() * 16000)))

        }


        // clear out empty lines
        try {
            let lines = code.split('\n')
            let strippedCode = []
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].trimEnd()
                if (line.length == 0) continue
                strippedCode.push(line)
            }
            code = strippedCode.join('\n')


        }
        catch (e) {
            console.warn("code.generator", e)
        }
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('  \n', '\n')
        // code = code.replace('\r\n', '\n')
        // code = code.replace('\n\t', '\n')
        // code = code.replace('\n\n', '\n')
        // code = code.replace('\n\n', '\n')
        // code = code.replace('\n  \n', '\n')
        // code = code.replace('\n  \n', '\n')
        // code = code.replace('\n  \n', '\n')
        // code = code.replace('\n  \n', '\n')
        // code = code.replace('\n  \n', '\n')
        // window.code = code
        // let lines = code.split("\n")
        // code = ''
        // Object.values(lines).forEach(line => {
        //     line = line.rstrip()
        //     if (line.length == 0) return
        //     code += `${line}\n`
        // })




        let listNetworkBlocks = [
            'cloud_join_group',
            'cloud_channels',
            'cloud_write_channel',
            'cloud_event_channel',
            'cloud_direct_control',
            'sheet_add_line',
            'cloud_handle_messenger',
            'cloud_send_messenger',
            'cloud_id_messenger',
            'cloud_clock_event',
            'cloud_clock_get',
            'cloud_clock_format',
            'Cloud_RunOnLambda',
            'cloud_lambda_setcode',
            'cloud_lambda_readresult',
            'cloud_ifttt_write',
            'cloud_ifttt_config',
            'cloud_thinkspeak_config',
            'cloud_thinkspeak_update'
        ]
        let codehash
        let flag = {}
        let pseudo
        let slot = window.port_map[gen.grobot_set_programe]
        flag.priority_program = gen.grobot_set_mode
        flag.GetButtonOnboard = false
        flag.network_wifi_setconnect = false
        flag.network_wifi_used = 0
        flag.slot = window.port_map[gen.grobot_set_programe]
        flag.wifi = gen.known_networks

        let blocksType = {}
        Blockly.getMainWorkspace().getAllBlocks().forEach(block => {
            if (block.disabled) return
            blocksType[block.type] = true
            if (block.type == ('GetButtonOnboard')) flag.GetButtonOnboard = true
            if (block.type == ('network_wifi_setconnect')) flag.network_wifi_setconnect = true
            if (listNetworkBlocks.includes(block.type)) {
                flag.network_wifi_used += 1
            }

        })
        window.blocksType = blocksType


        // fs.writeFileSync('/home/ubuntu/katinat/_example_python.py', code)
        console.groupEnd();
        window.code = code
        return { code, codehash, flag, pseudo, slot }
    }

    gen.value = function (block, property) {
        /*
            This block is to allow communication to assign the static variable
            Unlike the dream syntax of python await1(await2(await3)) that it will calulate inside out
            We need to flatten and put them in order
            await3()
            await2()
            await1()
    
            / To make things funnier, the await syntax do not return value, thus can't return value
            so then we need to store the result somewhere
        	
            int result3, result2, result1
            await3($result3)
            await2($result2, result3)
            await1($result1, result2)
        	
            AND yes, the variable MUST be in global scope
    
            So ValueBlk can be parsed with valueToCode (from gen.scrape method), which then return the triple tuple
            the 
        */
    }

    gen.safe = function (a) {
            a ? (a = encodeURI(gen.escape(a).replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(a[0]) && (a = "my_" + a)) : a = "unnamed";
            // a = gen.escape(a)
            let v = 'usr_' + a
            console.log('gen.safe', a, '->', v)
            return gen.Symbol(v)
        
    };
    // Create a temporary variable in global scope
    gen.tvar = function (block, type, name) {
        // create a static variable for the block
        // the static variable is stored inside the top blocks only
        // because each top blocks represent a task, that is synced by nature

        // const root = block.getRootBlock()
        const key = `${block.id}.${name}`
        if (gen.tvar_store.hasOwnProperty(key)) {
            return {
                name: gen.tvar_store[key],
                type: type
            }
        }

        gen.tvar_id += 1;
        const varname = `__tvar${gen.tvar_id}__`
        const declaration = `${type}\t${varname};`
        if (block.getRootBlock().disabled == false) {
            console.log(`gen.tvar`, getSimulatedName(block.type), gen.tvar_id)
            gen.Static(declaration)
        }
        gen.tvar_store[key] = varname


        return {
            name: varname,
            type: type
        }
    }
    gen._AddToSet = function (set, string) {
        if (set.indexOf(string) === -1) set.push(string)
    }
    gen.Import = function (string) {
        gen._AddToSet(gen.section.import, string)
    }
    gen.Symbol = function (string) {
        var prefix = window._prefix_symbol || ''
        var suffix = window._suffix_symbol || ''

        try {
            // if symbol not exist, create
            let syms = window.symbols || {}
            window.symbols = syms
            if (syms.hasOwnProperty(string)) {
                return prefix + syms[string] + suffix
            }

            // create a new symbol
            let name = `_${(Object.keys(syms).length).toString(36)}`
            // const digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            // toB64 = x => x.toString(2).split(/(?=(?:.{6})+(?!.))/g).map(v => digit[parseInt(v, 2)]).join("")
            // fromB64 = x => x.split("").reduce((s, v) => s * digit.length + digit.indexOf(v), 0)

            // let name = `${toB64((Object.keys(syms).length))}`

            syms[string] = name
            if (string.startsWith('fn_') || string.startsWith('usr_')) {

            }
            else {

                gen._AddToSet(gen.section.symbols, `${name}=${string}`);
            }
            return prefix + name + suffix;

        }
        catch (e) {
            console.error("Failed to call gen.Symbol on ", string, e)
        }
    }
    gen.Variable = function (string) {
        gen._AddToSet(gen.section.variable, string)
    }
    gen.Static = function (string) {
        gen._AddToSet(gen.section.static, string)
    }
    gen.Object = function (string) {
        gen._AddToSet(gen.section.object, string)
    }
    gen.Task = function (string) {
        // gen.Import('import coroutine')
        gen._AddToSet(gen.section.task, string)
    }
    gen.Event = function (string) {
        gen._AddToSet(gen.section.event, string)
    }
    gen.Setup = function (string) {
        gen._AddToSet(gen.section.setup, string)
    }
    gen.Loop = function (string) {
        gen._AddToSet(gen.section.loop, string)
        // console.log(gen.section)
    }
    gen.Routine = function (string) {
        //# Routines are tasks that started after GRobot Program is done
        gen._AddToSet(gen.section.routine, string)
    }

    // convert the syntax into golang like for easy formatting
    gen.Method = function (str) {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1)
    }



    // DO NOT TOUCH :: This function is a workaround for a known bugs of shadow block
    function removeOverwrittenShadowsRecursively(obj) {
        // console.log(obj)
        // console.log("removeOverwrittenShadowsRecursively", obj)
        var shadowElement, blockElement;
        if (obj.elements) {
            for (var element of obj.elements) {
                if (element.name == "shadow") shadowElement = element;
                if (element.name == "block") blockElement = element;
            }
        }

        if (shadowElement && blockElement) removeFromArray(obj.elements, shadowElement);

        if (obj.elements) {
            for (var index in obj.elements) {
                obj.elements[index] = removeOverwrittenShadowsRecursively(obj.elements[index]);
            }
        }
        return obj;
    }

    function removeFromArray(arr) {
        console.log("Revmoce Item", arr)
        var what,
            a = arguments,
            L = a.length,
            ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    }
}

if (true) {

    var event = 'event'
    var action = 'action'
    var value = 'value'
    var makecode = window.makecode || {}
    var MakeCode = {}
    var ORDER_NONE = Blockly.Python.ORDER_NONE


    try {
        makecode.code_template = fs.readFileSync(
            "firmware/grobot/main.ino", { encoding: "utf8" }
        )
    }
    catch (err) {
        makecode.code_template = "FILE NOT FOUND"
        // console.warn("File not found")
    }
    // console.log("Template", makecode.code_template)

    gen.makecode = makecode
    gen.object_name = (type, port) => {
        // return `${type.toLowerCase()}_${port.split('.')[1].split('"')[0].toLowerCase()}`
        if (gen.grobot_ble_target == null) {
            return gen.Symbol(`usr_${type}_${port_map[port].toLowerCase().replace('.', '_')}`)
        }
        else {
            return `${type}_${gen.safe(gen.grobot_ble_target).toLocaleLowerCase()}_${port_map[port].toLowerCase()}`
        }
    }
    gen._rid = block => {
        // DEEPBUG: Block ID are from pxt core, this is just a workaround, fast one
        // block.id = block.id.replace('#', '')
        // Fuck
        return `reportId="${Buffer.from(block.id).toString('base64').replace('=', '')}"`
    }
    gen.rid = block => {
        // DEEPBUG: Block ID are from pxt core, this is just a workaround, fast one
        // block.id = block.id.replace('#', '')
        // Fuck
        var map = window.blockMapping;
        if (makecode.target == 'micropython') {
            // return `reportId=${map[block.id]}`
            if (getFirmwareVersion() >= 13) {
                return `${map[block.id]}`
                    
            }
            else {
                return `reportId=${map[block.id]}`

            }
        }
        else if (makecode.target == 'javascript') {
            return map[block.id]
        }

        // return `reportId=None`


        // return `reportId="${Buffer.from(block.id).toString('base64').replace('=', '')}"`
    }
    gen.event = event => {
        return `event.${gen.escape(event).split('.')[1]}`
    }
    gen.enum = (module, event) => {
        event = gen.escape(event).split('.')[1]
        return `${module}.${event}`
    }
    var hashCode = function (s) {
        return s.split("").reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
    }
    gen.abstractname = name => {
        return String(hashCode(name)).replace('-', '')
    }
    gen.fname = (block, obj, event) => {
        return `${obj}_${event}_${gen.abstractname(block.id)}`.replace('.', '').replace('"', '').replace('"', '')
    }
    let port_map = {
        'PORT1': '0',
        'PORT2': '1',
        'PORT3': '2',
        'PORT4': '3',
        'PORT5': '4',
        'PORT6': '5',
        '"ControllerSub.PORT1"': "board.PORT1",
        '"ControllerSub.PORT2"': "board.PORT2",
        '"ControllerSub.PORT3"': "board.PORT3",
        '"ControllerSub.PORT4"': "board.PORT4",
        '"Controller.PORT1"': "board.PORT1",
        '"Controller.PORT2"': "board.PORT2",
        '"Controller.PORT3"': "board.PORT3",
        '"Controller.PORT4"': "board.PORT4",
        '"Controller.PORT5"': "board.PORT5",
        '"Controller.PORT6"': "board.PORT6",
        '"ControllerSub.PORT1"': "board.PORT1",
        '"ControllerSub.PORT2"': "board.PORT2",
        '"ControllerSub.PORT3"': "board.PORT3",
        '"ControllerSub.PORT4"': "board.PORT4",
        '"FL5Channel.Channel1"': 0,
        '"FL5Channel.Channel2"': 1,
        '"FL5Channel.Channel3"': 2,
        '"FL5Channel.Channel4"': 3,
        '"FL5Channel.Switch"': 4,
        '"LineSensorSelector2.Sensor1"': 0,
        '"LineSensorSelector2.Sensor2"': 1,
        '"Programe.Programe_1"': 0,
        '"Programe.Programe_2"': 1,
        '"Programe.Programe_3"': 2,
        '"LineSensorState.DetectLine"': '0',
        '"LineSensorState.DetectSpace"': '1',
        '"TimeUnit.Microseconds"': 'time.ticks_us()',
        '"TimeUnit.Milisecond"': `time.ticks_ms()`,
        '"TimeUnit.Second"': `time.ticks_ms()//1000`,
        '"TimeUnit.Minute"': `time.ticks_ms()//60000`,
        '"TimeUnit.Hour"': `time.ticks_ms()//360000`,
        '"Direction.Forward"': `1`,
        '"Direction.Backward"': `-1`,


    }
    window.port_map = port_map

    let module_map = {
        LineSensor: ['linesensor', 'LineSensor', 'line'],
        MotionSensor: ['motion_sensor', 'MotionSensor', 'motion'],
        SoundSensor: ['sound_sensor', 'SoundSensor', 'sound'],
        WeatherSensor: ['weathersensor', 'WeatherSensor', 'weather'],
        LightSensor: ['lightsensor', 'LightSensor', 'light'],
        GasSensor: ['gassensor', 'GasSensor', 'gas'],
        DistanceSensor: ['distancesensor', 'DistanceSensor', 'distance'],
        Button: ['button', 'Button', 'button'],
        Slider: ['slider', 'Slider', 'slider'],
        Relay: ['relay', 'Relay', 'relay'],
        LED: ['led', 'LED', 'led'],
    }
    /*
        List of helper function for generating coroutine code
        Import: Library section
        Static: generated variable used by coroutine to sync up execution, dont touch
        Variable: User variable
        Object: Object declaration (for PORTs)
        Function: Function definition stay here
            Note that function is coroutine, can only run one at the same time
            TODO
        Event: Define event callback, is also coroutine
        Once: Similar to start block, but can run coroutine, setup callbacks
        Loop: main execution, must coordinate through all the coroutines
        
        ! Coroutine can not call another routine, therefore we must use stte
        ! Callback do NOT call the function directly, it only set a flag,
        a coroutine will check the flag if it need to run
        -> lower performance, higher delay prone
        Helper functions
        CreateTemporaryVariable(block, type?) -> variable name
        WriteImport(lib) -> #include "lib"
        WriteVariable(name) -> variable name
        WriteDeclare(type, name, args) -> 
        WriteFunction(string)
        WriteEvent(string)
        Value: GenerateValueCode(property)
        Action: GenerateActionCode(property)
    */
    makecode.controls_repeat_ext = {
        block: ['input.TIMES', 'statement.DO'],
        type: action,
        arduino: block => {
            var { TIMES, DO } = gen.scrape(block);
            let code = []
            let tvar = gen.tvar(block, 'int', '')
            code = [
                `for (int ${tvar.name} = 0; ${tvar.name} < ${TIMES.code}; ${tvar.name} ++){\n${DO}}\n`
            ]
            return code.join('')
            // return 'hallo'
        },
        python: block => {
            let { TIMES, DO } = gen.scrape(block)
            gen.Import('import interactive')
            if (window.optimizeGenerator) {
                return `for i in range(${TIMES.code}):\n${DO}\n`
            }
            else {
                return `for i in range(${TIMES.code}):\n${I}await interactive.report(value=[i,${TIMES.code}],${gen.rid(block)})\n${DO}\n`

            }
        },
        javascript: block => {
            let { TIMES, DO } = gen.scrape(block)
            return `for (var i = 0; i < ${TIMES.code};i++){\n${DO.code}\n}`
        }
    }
    makecode.device_while = {
        block: ['input.COND', 'statement.DO'],
        type: action,
        arduino: block => {
            var { COND, DO } = gen.scrape(block);
            let code = []
            code = [
                `while (${COND.code}){\n${DO}}\n`
            ]
            return code.join('')
        },
        python: block => {
            let { COND, DO } = gen.scrape(block)
            if (window.optimizeGenerator) {
                return `while (${COND.code}):\n${DO}\n`
                // return `while (${COND.code}):\n${I}await ${gen.Symbol('uasyncio.sleep_ms')}(0)\n${DO}\n`
                
            }
            else {
                return `while (${COND.code}):\n${I}await ${gen.Symbol('uasyncio.sleep_ms')}(0)\n${DO}\n`

            }
        },
        javascript: block => {
            let { COND, DO } = gen.scrape(block)
            return `while (${COND.code}){\n${DO}\n}`
        }
    }
    makecode.wait_until = {
        block: ['input.cond'],
        type: action,
        arduino: block => {
            var { cond, DO } = gen.scrape(block);
            let code = []
            code = [
                `while (!${cond.code}){}\n`
            ]
            return code.join('')
        },
        python: block => {
            let { cond, DO } = gen.scrape(block)
            // return `await interactive.report(${gen.rid(block)})\nwhile (${cond.code}):\n${chilling}\n`
            //! BUG : While loop can not use awaitable as value to compare 
            if (window.optimizeGenerator) {
                return `while True:\n${I}await ${gen.Symbol('uasyncio.sleep_ms')}(0)\n${I}if (${cond.code}): break\n`
                
            }
            else {
                return `await interactive.report(${gen.rid(block)})\nwhile True:\n${I}await uasyncio.sleep_ms(0)\n${I}if (${cond.code}): break\n`

            }
        },
        javascript: block => {
            let { COND } = gen.scrape(block)
            return `while (!${COND.code}){await sleep(1);}`
        }
    }
    makecode.pxt_controls_for = {
        block: ['input.VAR', 'input.TO', 'statement.DO'],
        type: action,
        arduino: block => {
            var { VAR, TO, DO } = gen.scrape(block);
            let code = []
            code = [
                `for (int ${VAR.code} = 0; ${VAR.code} < ${TO.code}; ${VAR.code}++){\n${DO}}\n`
            ]
            return code.join('')
        },
        python: block => {
            let { VAR, TO, DO } = gen.scrape(block)
            // let code = `for (${})`
            // # Var is always index, so usr_index
            let code = [
                `global ${gen.Symbol('usr_index')}\n`,
                `for ${gen.Symbol('usr_index')} in range(${TO.code}):\n${DO}\n`
            ]
            return code.join('')
        },
        javascript: block => {
            let { VAR, TO, DO } = gen.scrape(block)
            let code = `for (var usr_index = 0; usr_index < ${TO.code}; usr_index ++){\n${DO}\n}`
            return code
        }
    }
    makecode.pxt_controls_for_of = {
        block: ['input.VAR', 'input.LIST', 'statement.DO'],
        type: action,
        python: block => {
            let { VAR, LIST, DO } = gen.scrape(block)
            let varaibl = `${I}global ${gen.Symbol('usr_value')}`
            let code = [
                `global ${gen.Symbol('usr_value')}\n`,
                // `print("listloop", ${LIST.code})\n`,
                `for ${gen.Symbol('usr_value')} in list(${LIST.code}):\n${varaibl}\n${DO}\n`

            ]
            return code.join('')
        }
    }

    /*
                `global ${gen.Symbol('usr_matched')}`,
                `global ${gen.Symbol('usr_confidence')}`,
                `${gen.Symbol('usr_matched')}, ${gen.Symbol('usr_confidence')} = await ${gen.Symbol('tensorflow.match_image')}(${model.code},${stream.code},${gen.rid(block)})`,
                `if True:\n${handler}\n`

    */

    makecode.frame_display = {
        block: [],
        type: event,

    }

    // makecode.grobot_general_connect = {
    //     block: ['field.module', 'field.port'],
    //     type: action,
    //     python: block => {
    //         let { module, port } = gen.scrape(block)
    //         module = module.split('.')[1].replace('"', '')
    //         console.log({ module, port })
    //         let [lib, classname, short] = module_map[module]
    //         gen.Import(`import ${lib}`)
    //         let object = gen.object_name(short, port)
    //         gen.Static(`${object} = ${lib}.${classname}(${port_map[port]}${gen.tar(block)})`)
    //         gen.Setup(`await ${object}.begin()\n`)
    //     }
    // }


    makecode.forever = {
        block: ['statement.HANDLER'],
        type: event,
        python: block => {
            let { HANDLER } = gen.scrape(block)
            let fname = gen.fname(block, 'routine', "")
            let code = `async def ${fname}():\n${getVarString(block)}\n${HANDLER}`
            gen.Import('import coroutine')
            //! Do not set interval to 0, there are some board with firmware bug out there
            if (window.optimizeGenerator) {
                gen.Routine(`${gen.Symbol('coroutine.createRoutine')}(${fname},1,${gen.rid(block)})\n`)
            }
            else {
                gen.Routine(`coroutine.createRoutine(${fname},1,${gen.rid(block)})\n`)
            }

            gen.Task(code)
        },
        arduino: block => {
            let { handler } = gen.scrape(block)
            let code = `${handler}`
            gen.Loop(code)
        },
        javascript: block => {
            let { HANDLER } = gen.scrape(block)
            let fname = gen.fname(block, 'routine', "")
            let code = `var ${fname} = async () => {\n${HANDLER}\n}`
            // gen.Setup(`intervals.push(setInterval(async () => {await ${fname}()},100))\n`)
            gen.Setup(`StreamCreateTask(${fname});`)
            gen.Task(code)
        }
    }
    // makecode.grobot_general_loop = {
    //     block: ['statement.HANDLER'],
    //     type: event,
    //     arduino: block => {
    //         let { handler } = gen.scrape(block)
    //         let code;
    //         code = `void grobot_loop(){\n${handler}\n}\n`
    //         gen.Loop('grobot_loop();\n')
    //         gen.Task(code)
    //     },
    //     python: block => {
    //         let { handler } = gen.scrape(block)
    //         gen.Setup('mainthread.create_task(grobot_loop())\n')
    //         let code = `async def grobot_loop():\n${handler}\n`
    //         gen.Task(code)
    //     }
    // }

    makecode.grobot_attach_encoder = {
        block: ['field.port'],
        type: action,
        python: block => {
            let { port } = gen.scrape(block)
            console.log("encoder", port)
            gen.Import('import motor')
            return `await ${gen.Symbol('motor.attach_encoder')}(${port_map[port]}, ${gen.rid(block)})\n`
        }
    }


    makecode.grobot_select_wheel = {
        block: ['field.wheel'],
        type: action,
        python: block => {
            let { wheel } = gen.scrape(block)
            gen.Import('import motor')
            return `await ${gen.Symbol('motor.attach_wheel')}(${port_map[wheel]}, ${gen.rid(block)})\n`
        }
    }


    makecode.grobot_go_distance = {
        block: ['field.direction', 'input.dist'],
        type: action,
        python: block => {
            let { direction, dist } = gen.scrape(block)
            gen.Import('import motor')
            return `await ${gen.Symbol('motor.walk')}(${port_map[direction]}, ${dist.code},${gen.rid(block)})\n`
        }
    }
    makecode.grobot_set_default_speed = {
        block: ['input.speed'],
        type: action,
        python: block => {
            let { speed } = gen.scrape(block)
            gen.Import('import motor')
            return `await ${gen.Symbol('motor.set_default_speed')}(${speed.code},${gen.rid(block)})\n`
        }

    }
    makecode.grobot_set_speed_range = {
        block: ['input.min', 'input.max'],
        type: action,
        python: block => {
            let { min, max } = gen.scrape(block);
            gen.Import('import motor');
            return `await motor.set_speed_range(${min.code},${max.code},${gen.rid(block)})\n`
        }
    }

    makecode.grobot_rotate_angle = {
        block: ['input.angle'],
        type: action,
        python: block => {
            let { angle } = gen.scrape(block)
            gen.Import('import motor')
            return `await ${gen.Symbol('motor.rotate')}(${angle.code}, ${gen.rid(block)})\n`
        }
    }

    makecode.grobot_extender_scoped = {
        block: ['field.port', 'statement.HANDLER'],
        type: action,
        python: block => {
            let { port, handler } = gen.scrape(block)
            let object = gen.object_name('expander', port)
            gen.Import('import extender')
            gen.Static(`${object}=extender.of(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            
            let code = `async with ${object}:\n${handler}\n`
            return code
            
        }
    }
    
    

    makecode.grobot_general_oncontrolkey = {
        block: ['field.hotkey', 'statement.HANDLER'],
        type: event,
        arduino: block => {
            let { hotkey, handler } = gen.scrape(block)
            let code;
            let key = `${gen.escape(hotkey).split(".")[1]}`
            let name = `grobot_hotkey_${key}`
            code = `void grobot_loop(){\n${handler}\n}\n`
            gen.Loop('grobot_loop();\n')
            gen.Task(code)
        },
        python: block => {
            let { hotkey, handler } = gen.scrape(block)
            let key = `${gen.escape(hotkey).split('"')[1]}`
            let name = `grobot_hotkey_${key}`
            gen.Import('import keyboard')
            gen.Task(`async def ${name}:\n${handler}\n`)
            gen.Setup(`await keyboard.begin()\n`)
            gen.Setup(`keyboard.map(${key}, ${name})\n`)
        }
    }
    makecode.grobot_general_getcontrolkey = {
        block: ['field.hotkey'],
        type: value,
        arduino: block => {
            var { hotkey } = gen.scrape(block)
            let key = `${gen.escape(hotkey).split(".")[1]}`
            // var tvar = gen.tvar(block, 'bool', '')
            return [JSON.stringify({
                code: `IsButtonPressed()`,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
        }
    }
    makecode.grobot_line_readsensor2 = {
        block: ['field.port', 'field.channel'],
        type: value,
        arduino: block => {
            // var definition = gen.value(block, {})
            let { channel, port } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            let tvar = gen.tvar(block, 'bool', '')
            channel = gen.escape(channel).split("LineSensorSelector2.Sensor")[1]
            gen.Import('#include "GRobotDevice.h"')
            let code = `GetFollowLine(${channel},0,0,${port_map[port]})`
            return [JSON.stringify({
                precode: [],
                code: code,
                static: [
                    tvar
                ]
            }), Blockly.Arduino.ORDER_NONE]
        },
        python: block => {
            let { channel, port } = gen.scrape(block)
            let object = gen.object_name('', port)
            gen.Import('import line_sensor')
            gen.Static(`${object} = line_sensor.LineSensor(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.get_channel(${port_map[channel]},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
    }
    // makecode.grobot_line_readposition = makecode.grobot_line_readposition2
    makecode.math_number = {
        block: ['field.NUM'],
        type: value,
        arduino: block => {
            // var { num } = gen.scrape(block)
            let num = block.getFieldValue('NUM')
            // if (!num.includes('.')) {
            //     num = `${num}.00`
            // }
            num = `(int)${num}`
            // console.warn("Value is ", num)
            return [JSON.stringify({
                precode: [],
                code: `${num}`,
                static: []
            }), Blockly.Arduino.ORDER_NONE]
        },
        python: block => {
            let num = block.getFieldValue('NUM')
            return [JSON.stringify({
                precode: [],
                code: `${num}`,
                static: []
            }), Blockly.Arduino.ORDER_NONE]
        },
        javascript: block => {
            let num = block.getFieldValue('NUM')
            return [JSON.stringify({
                precode: [],
                code: `${num}`,
                static: []
            }), Blockly.Arduino.ORDER_NONE]
        }
    }
    makecode.timePicker = {
        block: ['field.ms'],
        type: value,
        arduino: block => {
            var s = gen.scrape(block)
            return [s.ms, ORDER_NONE]
        },
        python: block => {
            let { ms } = gen.scrape(block)
            return [ms, ORDER_NONE]
        },
        javascript: block => {
            let { ms } = gen.scrape(block)
            return [ms, ORDER_NONE]
        }
    }
    makecode.variables_get_reporter = {
        block: ['field.VAR'],
        type: value,
        arduino: block => {
            let { VAR } = gen.scrape(block)
            return [gen.escape(`${gen.safe(VAR)}`), ORDER_NONE]
        },
        python: block => {
            let { VAR } = gen.scrape(block)
            // return [gen.escape(VAR), ORDER_NONE]
            gen.Import('import variable')
            let code;
            if (window.optimizeGenerator) {
                code = `${gen.safe(VAR)}`
            }
            else {

                code = `await variable.value("${gen.safe(VAR)}",${gen.rid(block)})`
            }
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { VAR } = gen.scrape(block)
            let code = `await stream('variables_get_reporter', ["${gen.safe(VAR)}"],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]

        }
    }
    makecode.variables_get = {
        block: ['field.VAR'],
        type: value,
        arduino: block => {
            let { VAR } = gen.scrape(block)
            return [gen.escape(`${gen.safe(VAR)}`), ORDER_NONE]
        },
        python: block => {
            // let { VAR } = gen.scrape(block)
            let VAR = block.getField('VAR').variable_.name

            // return [gen.escape(VAR), ORDER_NONE]
            gen.Import('import variable')
            let code;
            if (window.optimizeGenerator) {
                code = `${gen.safe(VAR)}`
            }
            else {
                code = `await variable.value("${gen.safe(VAR)}",${gen.rid(block)})`
            }
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { VAR } = gen.scrape(block)
            let code = `await stream('variables_get', ["${gen.safe(VAR)}"],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]

        }

    }
    makecode.variables_set = {
        block: ['field.VAR', 'input.VALUE'],
        type: action,
        arduino: block => {
            let { VAR, value } = gen.scrape(block)
            VAR = gen.escape(VAR)
            let code = []
            code = [`${gen.safe(VAR)} = ${value.code};\n`]
            return code.join('')
        },
        python: block => {
            let { VAR, value } = gen.scrape(block)
            VAR = block.inputList[0].fieldRow[1].selectedOption_[0]
            gen.Import('import variable')
            let code;
            if (window.optimizeGenerator) {
                code = `${gen.safe(VAR)}=${value.code}\n`
            }
            else {

                code = `await variable.value("${gen.safe(VAR)}", ${value.code},${gen.rid(block)})\n`
            }
            return code
        },
        javascript: block => {
            let { VAR, value } = gen.scrape(block)
            let code = `await stream('variables_set', ["${gen.safe(VAR)}",${value.code}],${gen.rid(block)});\n`
            return code
        }
    }
    makecode.variables_change = {
        block: ['field.VAR', 'input.VALUE'],
        type: action,
        arduino: block => {
            let { VAR, value } = gen.scrape(block)
            VAR = gen.escape(VAR)
            let code = []
            code = [`${gen.safe(VAR)} += ${value.code};\n`]
            return code.join('')
        },
        python: block => {
            let { VAR, value } = gen.scrape(block)
            VAR = block.inputList[0].fieldRow[1].selectedOption_[0]
            gen.Import('import variable')
            if (window.optimizeGenerator) {
                return `${gen.safe(VAR)} += ${value.code}\n`
                
            }
            else {

                return `await variable.change('${gen.safe(VAR)}', ${value.code},${gen.rid(block)})\n`
            }
        },
        javascript: block => {
            let { VAR, value } = gen.scrape(block)
            let code = `await stream('variables_change', ["${gen.safe(VAR)}",${value.code}],${gen.rid(block)});\n`
            return code
        }

    }
    makecode.math_whole_number = {
        block: ['field.NUM', 'input.cond'],
        type: value,
        arduino: block => {
            var { num, cond } = gen.scrape(block)
            // return [`whole(${num}, ${cond})`, Blockly.Arduino.ORDER_NONE]
            return [`${num}`, ORDER_NONE]
        },
        python: block => {
            let { num, cond } = gen.scrape(block)
            return [`${num}`, ORDER_NONE]
        },
        javascript: block => {
            let { num, cond } = gen.scrape(block)
            return [`${num}`, ORDER_NONE]
        }
    }
    // makecode.grobot_motor_setspinwithtime = {
    //     block: ['field.motor', 'input.power', 'input.time'],
    //     type: action,
    //     arduino: block => {
    //         let { motor, power, time } = gen.scrape(block)
    //         let code = []
    //         let method = ''
    //         if (motor == '"MotorSelection.M1"') {
    //             method = 'GRobot_motor_1'
    //         } else if (motor == '"MotorSelection.M2"') {
    //             method = 'GRobot_motor_2'
    //         }
    //         gen.Import(`#include "GRobotMovements.h"`)
    //         code = [
    //             `${method}(${power.code}, 0);delay(${time.code});\n`
    //         ]
    //         return code.join('')
    //     }
    // }
    // makecode.grobot_motor_setspin = {
    //     block: ['field.motor', 'input.power',],
    //     type: action,
    //     arduino: block => {
    //         let { motor, power, time } = gen.scrape(block)
    //         let code = []
    //         let method = ''
    //         if (motor == '"MotorSelection.M1"') {
    //             method = 'GRobot_motor_1'
    //         } else if (motor == '"MotorSelection.M2"') {
    //             method = 'GRobot_motor_2'
    //         }
    //         gen.Import(`#include "GRobotMovements.h"`)
    //         code = [
    //             `${method}(${power.code}, 0);\n`
    //         ]
    //         return code.join('')
    //     }
    // }
    makecode.speedPicker = {
        block: ['field.speed'],
        type: value,
        arduino: block => {
            var { speed } = gen.scrape(block)
            return [`${speed}`, Blockly.Arduino.ORDER_NONE]
        },
        python: block => {
            let { speed } = gen.scrape(block)
            // return [speed, ORDER_NONE]
            //! Update Speed now go with 100 to map 255 on this device
            //! due to mismatch
            return [`int((${speed})*2.55)`, ORDER_NONE]
        },
        javascript: block => {
            let { speed } = gen.scrape(block)
            return [speed, ORDER_NONE]

        }
    }
    makecode.speedPicker_ = makecode.speedPicker
    makecode.math_arithmetic = {
        block: ['field.OP', 'input.A', 'input.B'],
        type: value,
        arduino: block => {
            let { op, a, b } = gen.scrape(block)
            let tvar = gen.tvar(block, 'double', '')
            if (op == '"POWER"') {
                return [JSON.stringify({
                    code: `pow(${a.code},${b.code})`,
                    precode: [],
                    static: []
                }), ORDER_NONE]
            }
            if (op == '"ADD"') op = "+"
            if (op == '"MINUS"') op = "-"
            if (op == '"MULTIPLY"') op = "*"
            if (op == '"DIVIDE"') op = "/"
            return [JSON.stringify({
                code: `(${a.code} ${op} ${b.code})`,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { a, b, op } = gen.scrape(block)
            window.test = gen.scrape(block)
            gen.Import('import calc')
            op = gen.escape(op).toLowerCase()
            let code;
            
            let map = {
                add: '+',
                power: "**",
                minus: "-",
                multiply: "*",
                divide: "/",
            };
            
            let opmap = {
                min: '"min"',
                max: '"max"'
            }

            if (window.optimizeGenerator) {
                if (map.hasOwnProperty(op)) {
                    
                    code = `(${a.code}${map[op]}${b.code})`
                }
                else if (opmap.hasOwnProperty(op)){
                    code = `${opmap[op]}(${a.code},${b.code})`
                }

                else {
                    
                    code = `await calc.${op}(${a.code}, ${b.code},${gen.rid(block)})`
                }
            }
            else {

                code = `await calc.${op}(${a.code}, ${b.code},${gen.rid(block)})`
            }
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { a, b, op } = gen.scrape(block)
            op = gen.escape(op).toLowerCase()
            let code = `await stream('math_arithmetic', ["${op}", ${a.code},${b.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        }
    }
    makecode.math_js_round = {
        block: ['field.OP', 'input.ARG0'],
        type: value,
        arduino: block => {
            let { op, arg0 } = gen.scrape(block)
            let tvar = gen.tvar(block, 'double', '')
            return [JSON.stringify({
                code: `${gen.escape(op)}(${arg0.code})`,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            // calc.ceil calc.round calc.floor calc.trunc
            let { op, arg0 } = gen.scrape(block)
            gen.Import('import calc')
            let symbol = `calc.${gen.escape(op).toLowerCase()}`
            let code = `await ${symbol}(${arg0.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { op, arg0 } = gen.scrape(block)
            let code = `await stream('math_js_round', [${op}, ${arg0.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.grobot_buzzer_setstate = {
        block: ['input.state'],
        type: action,
        arduino: block => {
            var { state } = gen.scrape(block)
            let code;
            gen.Import('#include "GRobotDevice.h"')
            code = [
                `buzzer(${state.code});\n`
            ]
            return code.join('')
        },
        python: block => {
            let { state } = gen.scrape(block)
            gen.Import('import buzzer')
            return `await buzzer.value(${state.code},${gen.rid(block)})\n`
        },
        javavscript: block => {
            let { state } = gen.scrape(block)
            // return `await buzzer.value(${state.code},${gen.rid(block)})\n`
            return `await stream('grobot_buzzere_setstate', [${state.code}],${gen.rid(block)});\n`
        }
    }
    makecode.grobot_set_mode = {
        block: [],
        type: action,
        python: block => {
            let { state } = gen.scrape(block)

            // gen.Import('import flag')
            // gen.Setup('flag.set(flag.PROGRAME_ONSTART)\n')
            gen.grobot_set_mode = true // this mode allow program to priority
            return ``
        },
    }
    makecode.grobot_calibrate = {
        block: ['input.calib'],
        type: action,
        python: block => {
            let { calib } = gen.scrape(block)
            gen.Import('import motor\n')
            let code = `await motor.set_calibration(${calib.code},${gen.rid(block)});`
            if (getFirmwareVersion() >= 13){
                code += `await motor.set_boost(150)\n`; // this will also enable boost flag
            }
            code += '\n'

            return code
        }
    }
    makecode.grobot_calibrate_state = {
        block: ['input.state'],
        type: action,
        python: block => {
            let {state} = gen.scrape(block)
            window.calibState = state
            if (getFirmwareVersion() >= 13) {
                return `await motor.set_boost(150);await motor.set_boost_state(${state.code}, ${gen.rid(block)})\n`;
                
            }
            return ''
        }
    }
    makecode.grobot_set_programe = {
        block: ['field.program'],
        type: action,
        python: block => {
            let { program } = gen.scrape(block)
            // gen.Import('import usercode')
            // gen.Setup(`usercode.save(${port_map[program]})\n`)
            gen.grobot_set_programe = program
            return ``
            // return `pass# This is programme number ${program}`
        }
    }
    makecode.grobot_button_value = {
        block: ['field.state'],
        type: value,
        arduino: block => {
            var { state } = gen.scrape(block)
            var tvar = gen.tvar(block, 'bool', '')
            gen.Import('#include "ModeButton.h"')
            return [JSON.stringify({
                code: `(GetButtonOnBoard()==${state == '"PressOrRelease.Pressed"' ? '0' : '1'})`,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { state } = gen.scrape(block)
            gen.Import('import button')
            let code = `await button`
            return [JSON.stringify({
                code: code,
                static: [],
                precode: []
            }), ORDER_NONE]
        }
    }
    let controls_if_components = ['statement.ELSE']
    for (let i = 0; i < 64; i++){
        controls_if_components.push(`input.IF${i}`)
        controls_if_components.push(`statement.DO${i}`)
    }
    window.controls_if_components = controls_if_components
    makecode.controls_if = {
        block: controls_if_components,
        type: action,
        arduino: block => {
            // TODO : Support DO1 , DO2, DO3
            // let { IF0, DO0, ELSE } = gen.scrape(block)
            let code = []
            code = [
                `if (${IF0.code}){\n${DO0}}\n`
            ]
            return code.join('')
        },
        python: block => {
            // let { IF0, DO0, ELSE } = gen.scrape(block)
            // let scaper = gen.scrape(block)
            // let code = '';
            let isFirst = false;
            // alert(ELSE == undefined)
            // if (ELSE == undefined) {
            //     return `if (${IF0.code}):\n${DO0}\n`
            // }
            // let code = `if (${IF0.code}):\n${DO0}else:\n${ELSE}\n`
            // return code

            let scaper = gen.scrape(block)
            window.scaper = scaper
            let code = ''
            code += `if (${scaper.IF0.code}):\n${scaper.DO0}\n`
            for (let i = 1; i < 64; i++){
            
                // if (scaper[`DO${i}`] == undefined){
                //     continue;
                // }
                // if (scaper[`IF${i}`] == undefined){
                //     continue;
                // }
                // if (i == 0){
                //     code += `elif (${IF0.code}):\n${DO0}\n`
                // }
                if (scaper[`IF${i}`]?.code != undefined && scaper[`DO${i}`] != undefined) {
                    console.log("Got Argument ", i)
                    code += `elif (${scaper[`IF${i}`].code}):\n${scaper[`DO${i}`]}\n`
                }
            }
            if (scaper.ELSE != undefined) {
                code += `else:\n${scaper.ELSE}\n`
            }
            return code;
        },
        javascript: block => {
            let { IF0, DO0, ELSE } = gen.scrape(block)

            let code = `if (${IF0.code}){\n${DO0}}\nelse{\n${ELSE}\n}\n`
            return code
        }
    }
    makecode.math_constrain_value = {
        block: ["input.value", "input.low", "input.high"],
        type: value,
        python: block => {
            let { value, low, high } = gen.scrape(block)
            gen.Import('import calc')
            let code = `await ${gen.Symbol('calc.constrain')}(${value.code},${low.code},${high.code},${gen.rid(block)})`

            return [JSON.stringify({
                code: code,
                precode: '',
                static: []
            }), ORDER_NONE]


        }
    }



    makecode.math_op2 = {
        block: ['input.x', 'input.y', 'field.op'],
        type: value,
        arduino: block => {
            let { x, y, op } = gen.scrape(block)
            // op = min | max
            let tvar = gen.tvar(block, 'double', '')
            let code = `${gen.escape(op)}(${x.code},${y.code})`
            let precode = ''
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { op, x, y } = gen.scrape(block)
            window.test = gen.scrape(block)
            gen.Import('import calc')
            let code;
            if (window.optimizeGenerator) {
                code = `${gen.escape(op)}(${x.code},${y.code})`
            }
            else {
                code = `await calc.${gen.escape(op).toLowerCase()}(${x.code}, ${y.code},${gen.rid(block)})`
            }
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { op, x, y } = gen.scrape(block)
            let code = `await stream('math_op2", ["${gen.escape(op).toLowerCase()}",${x.code}, ${y.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.math_js_op = {

        block: ['field.OP', 'input.ARG0', 'input.ARG1'],
        type: value,
        arduino: block => {
            let { arg0, op, arg1 } = gen.scrape(block)
            op = gen.escape(op)
            let code = ''
            if (["sin", "cos", "tan", "sqrt"].includes(op)) {
                code = `${op}(${arg0.code})`
            }
            else if (['idiv', 'atan2', 'imul'].includes(op)) {
                code = `${op}(${arg0.code},${arg1.code})`
            }

            // let code = `${gen.escape(op)}(${arg0.code},${arg1.code})`
            let precode = ''
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            // ceil.sqrt sin cos tan atan2 idiv imul
            let { op, arg0, arg1 } = gen.scrape(block)
            gen.Import('import calc')
            op = gen.escape(op)
            
            let code

            if (window.optimizeGenerator) {
                // if (['idiv', 'atan2', 'imul'].includes(op)) {
                //     gen.Import('import math')
                
                // }
                gen.Import('import math')
                if (op == 'idiv') {
                    let sym = gen.Symbol('math.trunc')
                    code = `(${sym}(${arg0.code})//${sym}(${arg1.code}))`
                }
                else if (op == 'imul') {
                    let sym = gen.Symbol('math.trunc')
                    code = `(${sym}(${arg0.code})*${sym}(${arg1.code}))`
                }
                else if (op == 'atan2') {
                    let sym = gen.Symbol('math.atan2')
                    code = `(${sym}(${arg0.code},${arg1.code}))`
                }
                else if (op == 'sqrt') {
                    let sym = gen.Symbol('math.sqrt')
                    code = `(${sym}(${arg0.code}))`
                }
                else if (op == 'sin') {
                    let sym = gen.Symbol('math.sin')
                    code = `(${sym}(${arg0.code}))`
                }
                else if (op == 'cos') {
                    let sym = gen.Symbol('math.cos')
                    code = `(${sym}(${arg0.code}))`
                }
                else if (op == 'tan') {
                    let sym = gen.Symbol('math.tan')
                    code = `(${sym}(${arg0.code}))`
                }
                    
                else {
                    code = `await calc.${gen.escape(op).toLowerCase()}(${arg0.code},${gen.rid(block)})`
                }
            }
            else {
                if (['idiv', 'atan2', 'imul'].includes(op)) {
                    code = `await calc.${gen.escape(op).toLowerCase()}(${arg0.code},${arg1.code},${gen.rid(block)})`
                }
                else {
                    code = `await calc.${gen.escape(op).toLowerCase()}(${arg0.code},${gen.rid(block)})`
                }
            }

            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { op, arg0, arg1 } = gen.scrape(block)
            let code;


            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.math_op3 = {
        block: ['input.x'],
        type: value,
        arduino: block => {
            let { x } = gen.scrape(block)
            return [JSON.stringify({
                code: `abs(${x.code})`,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { x } = gen.scrape(block)
            gen.Import('import calc')
            let code = `await calc.abs(${x.code},${gen.rid(block)})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        },
        javascript: block => {
            let { x } = gen.scrape(block)
            let code = `await stream('math_op3", [${x.code}],${gen.rid(block)})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        },
    }
    makecode.percentchance = {
        block: ['input.percentage'],
        type: value,
        arduino: block => {
            let { percentage } = gen.scrape(block)
            let code = `(random(0,100) < ${percentage.code})`
            let precode = []
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { percentage } = gen.scrape(block)
            gen.Import('import calc')
            let code = `await calc.percentage(${percentage.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { percentage } = gen.scrape(block)
            let code = `await stream('percentchance", [${percentage.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
    }
    makecode.math_modulo = {
        block: ['input.DIVIDEND', 'input.DIVISOR'],
        type: value,
        arduino: block => {
            let { dividend, divisor } = gen.scrape(block)
            // let tvar = gen.tvar(block, 'double', '')
            let code = `(${dividend.code}%${divisor.code})`
            let precode = []
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { dividend, divisor } = gen.scrape(block)
            gen.Import('import calc')
            // op = 'divide'
            let code = `await calc.modulo(${dividend.code}, ${divisor.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { dividend, divisor } = gen.scrape(block)
            // let tvar = gen.tvar(block, 'double', '')
            let code = `await stream('math_modulo", [${dividend.code},${divisor.code}],${gen.rid(block)})`
            let precode = []
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },

    }
    makecode.logic_compare = {
        block: ['field.OP', 'input.A', 'input.B'],
        type: value,
        arduino: block => {
            let { op, a, b } = gen.scrape(block)
            let tvar = gen.tvar(block, 'bool', '')
            let code = []
            let precode = []
            console.warn("CODE", op)
            op = gen.escape(op)
            if (op == 'EQ') op = '=='
            if (op == 'NEQ') op = '!='
            if (op == 'LT') op = '<'
            if (op == 'LTE') op = '<='
            if (op == 'GT') op = '>'
            if (op == 'GTE') op = '>='
            code = `(${a.code} ${op} ${b.code})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { op, a, b } = gen.scrape(block)
            gen.Import('import logic')
            let code;
            if (window.optimizeGenerator) {
                op = gen.escape(op)
                if (op == 'EQ') op = '=='
                if (op == 'NEQ') op = '!='
                if (op == 'LT') op = '<'
                if (op == 'LTE') op = '<='
                if (op == 'GT') op = '>'
                if (op == 'GTE') op = '>='
                code = `(${a.code}${op}${b.code})`
            }
            else {
                let symbol = gen.Symbol(`logic.${gen.escape(op).toLowerCase()}(${a.code}`)
                code = `await ${symbol}, ${b.code},${gen.rid(block)})`
            }

            return [JSON.stringify({ code: code, static: [], precode: [] }), ORDER_NONE]
        },
        javascript: block => {
            let { op, a, b } = gen.scrape(block)
            let code = `await stream('logic_compare', ["${gen.escape(op).toLowerCase()}",${a.code}, ${b.code}],${gen.rid(block)})`
            return [JSON.stringify({ code: code, static: [], precode: [] }), ORDER_NONE]
        },
    }
    makecode.logic_negate = {
        block: ['input.BOOL'],
        type: value,
        arduino: block => {
            let { bool } = gen.scrape(block)
            let tvar = gen.tvar(block, 'bool', '')
            let code = ''
            let precode = []
            if (bool.code === undefined) bool.code = 'false'
            code = `(!${bool.code})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { bool } = gen.scrape(block)
            if (bool.code === undefined) bool.code = 'false'
            return [JSON.stringify({
                code: `not (${bool.code})`,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.math_map = {
        block: ['input.value', 'input.fromLow', 'input.fromHigh', 'input.toLow', 'input.toHigh'],
        type: value,
        arduino: block => {
            let { value, fromlow, fromhigh, tolow, tohigh } = gen.scrape(block)
            let tvar = gen.tvar(block, 'double', '')
            let code = `map(${value.code},${fromlow.code},${fromhigh.code},${tolow.code},${tohigh.code})`
            let precode = []
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { value, fromlow, fromhigh, tolow, tohigh } = gen.scrape(block)
            gen.Import('import calc')
            let code = `await calc.map(${value.code}, ${fromlow.code}, ${fromhigh.code}, ${tolow.code}, ${tohigh.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                static: [],
                precode: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { value, fromlow, fromhigh, tolow, tohigh } = gen.scrape(block)
            let code = `await stream('math_map", [${value.code}, ${fromlow.code}, ${fromhigh.code}, ${tolow.code}, ${tohigh.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                static: [],
                precode: []
            }), ORDER_NONE]
        },

    }
    makecode.math_varrain_value = {
        block: ['input.value', 'input.high', 'input.low'],
        type: value,
        arduino: block => {
            let { value, high, low } = gen.scrape(block)
            // console.error([value, fromlow, fromHigh, toLow, toHigh])
            let tvar = gen.tvar(block, 'double', '')
            let code = `varrain(${value.code},${low.code}, ${high.code})`
            let precode = []
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { value, high, low } = gen.scrape(block)
            gen.Import('import calc')
            let code = `await calc.varrain(${value.code}, ${low.code}, ${high.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                static: [],
                precode: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { value, high, low } = gen.scrape(block)
            let code = `await stream('math_varrain_value", [${value.code}, ${low.code}, ${high.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                static: [],
                precode: []
            }), ORDER_NONE]
        },

    }
    makecode.device_random = {
        block: ['input.min', 'input.limit'],
        type: value,
        arduino: block => {
            let { min, limit } = gen.scrape(block)
            let tvar = gen.tvar(block, 'double', '')
            let code = `random(${min.code}, ${limit.code})`
            let precode = []
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { min, limit } = gen.scrape(block)
            gen.Import('import calc')
            let code = `await ${gen.Symbol('calc.randrange')}(${min.code}, ${limit.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { min, limit } = gen.scrape(block)
            let code = `await stream('device_random", [${min.code}, ${limit.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.grobot_motor_setstop = {
        block: [],
        type: action,
        arduino: block => {
            gen.Import(`#include "GRobotMovements.h"`)
            return `GRobot_Stop();\n`
        }
    }
    makecode.grobot_motor_setmove = {
        block: ['field.directive', 'input.power'],
        type: action,
        arduino: block => {
            let { directive, power } = gen.scrape(block)
            let code = []
            gen.Import(`#include "GRobotMovements.h"`)
            let map = {
                '"GBMoveMotor.MoveForward"': 'GRobot_Forward',
                '"GBMoveMotor.MoveBackward"': 'GRobot_Back',
                '"GBMoveMotor.RotateLeft"': 'GRobot_RotateLeft',
                '"GBMoveMotor.RotateRight"': 'GRobot_RotateRight',
                '"GBMoveMotor.TurnLeft"': 'GRobot_TurnLeft',
                '"GBMoveMotor.TurnRight"': 'GRobot_TurnRight',
            }
            code = [`${method}(${power}, 0);`]
            return code.join('')
        }
    }
    makecode.grobot_motor_setmovewithtime = {
        block: ['field.directive', 'input.power', 'input.time'],
        type: action,
        arduino: block => {
            let { directive, power, time } = gen.scrape(block)
            let code = []
            gen.Import(`#include "GRobotMovements.h"`)
            let map = {
                '"GBMoveMotor.MoveForward"': 'GRobot_Forward',
                '"GBMoveMotor.MoveBackward"': 'GRobot_Back',
                '"GBMoveMotor.RotateLeft"': 'GRobot_RotateLeft',
                '"GBMoveMotor.RotateRight"': 'GRobot_RotateRight',
                '"GBMoveMotor.TurnLeft"': 'GRobot_TurnLeft',
                '"GBMoveMotor.TurnRight"': 'GRobot_TurnRight',
            }
            code = [`${map[directive]}(${power.code}, 0); delay(${time.code});\n`]
            return code.join('')
        }
    }
    makecode.playMelody = {
        block: ['input.melody', 'input.tempo'],
        type: action,
        arduino: block => {
            var { melody, tempo } = gen.scrape(block)
            let code = []
            code = [`PlayMelody(${gen.escape(melody.code)}, ${tempo.code});\n`]
            return code.join('')
        },
    }
    makecode.melody_editor = {
        block: ['field.melody'],
        type: value,
        arduino: block => {
            var { melody } = gen.scrape(block)
            // return melody
            return [melody, ORDER_NONE]
        },
        python: block => {
            var { melody } = gen.scrape(block)
            // return melody
            return [melody, ORDER_NONE]
        }
    }
    makecode.math_number_minmax = {
        block: ['field.SLIDER'],
        type: value,
        arduino: block => {
            var slider = block.getFieldValue('SLIDER')
            return [slider, ORDER_NONE]
        },
        python: block => {
            var slider = block.getFieldValue('SLIDER')
            return [slider, ORDER_NONE]
        },
        javascript: block => {
            var slider = block.getFieldValue('SLIDER')
            return [slider, ORDER_NONE]
        },
    }
    makecode.grobot_buzzer_setbpm = {
        block: ['input.bpm'],
        type: action,
        arduino: block => {
            var { bpm } = gen.scrape(block)
            let code = []
            code = [`SetBeatPerMinute(${bpm.code});\n`]
            return code.join('')
        }
    }
    makecode.grobot_buzzer_settone = {
        block: ['input.note', 'input.beat'],
        type: action,
        arduino: block => {
            var { note, beat } = gen.scrape(block)
            let code = []
            code = [`SetTone(${note.code}, ${beat.code});\n`]
            return code.join('')
        }
    }
    makecode.device_note = {
        block: ['field.note'],
        type: value,
        arduino: block => {
            var { note } = gen.scrape(block)
            return [note, ORDER_NONE]
        }
    }
    makecode.grobot_buzzer_setsilent = {
        block: ['input.beat'],
        type: action,
        arduino: block => {
            let code = []
            code = [`Silent();\n`]
            return code.join('')
        }
    }
    makecode.grobot_buzzer_setsong = {
        block: ['field.song'],
        type: action,
        arduino: block => {
            let { song } = gen.scrape(block)
            song = gen.escape(song).split(".")[1]
            let code = []
            code = [`PlaySong(${song});\n`]
            return code.join('')
        }
    }
    makecode.grobot_infrared_setsignal = {
        block: ['input.channel'],
        type: action,
        arduino: block => {
            let code = []
            let { channel } = gen.scrape(block)
            gen.Import('#include "GRobotDevice.h"')
            code = [
                `IR_Learning(${channel.code}, 4);\n`
            ]
            return code.join('')
        }
    }
    // TODO
    makecode.grobot_line_readswitch2 = {
        block: [],
        type: value,
        arduino: block => {
            var tvar = gen.tvar(block, 'bool', '')
            let code = ''
            let precode = []
            return [JSON.stringify({
                code: 'IsSwitched()',
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    // TODO
    makecode.grobot_line_readmask = {
        block: ['input.c1', 'input.c2', 'input.c3', 'input.c4'],
        type: value,
        arduino: block => {
            let { c1, c2, c3, c4 } = gen.scrape(block)
            let code = ''
            let precode = []
            gen.Import(`#include "GSensorFL5.h"`)
            gen.Setup("GetFL5Channel_Setup();\n")
            code = `GetFL5Channel_B(${c1.code}, ${c2.code}, ${c3.code}, ${c4.code})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { c1, c2, c3, c4 } = gen.scrape(block)
            gen.Import('import line_sensor')
            let code = `await line_sensor.check_state([${c1.code},${c2.code},${c3.code},${c4.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        }
    }
    makecode.grobot_infrared_readavailable = {
        block: ['input.channel'],
        type: value,
        arduino: block => {
            var { channel } = gen.scrape(block)
            let code = []
            let precode = []
            let tvar = gen.tvar(block, 'bool', '')
            gen.Import('#include "GRobotDevice.h"')
            code = `IRChannel(${channel.code})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.output_infrared_setsignal = {
        block: ['input.signal', 'field.port'],
        type: action,
        python: block => {
            let { signal, port } = gen.scrape(block)
            let object = gen.object_name('infrared', port)
            gen.Import('import infrared')
            gen.Static(`${object} = infrared.Infrared(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            return `await ${object}.send_signal(${signal.code})\n`
        }
    }
    makecode.routine_timer_delay = {
        block: ['input.time'],
        type: action,
        arduino: block => {
            var { time } = gen.scrape(block)
            let code = []
            let precode = []
            code = [`delay(${time.code});\n`]
            return code.join('')
        }
    }
    let colour_map = {
        '"0xff0000"': 28,
        '"0xff8000"': 29,
        '"0xffff00"': 30,
        '"0xff9da5"': 31,
        '"0x00ff00"': 32,
        '"0xb09eff"': 33,
        '"0x00ffff"': 34,
        '"0x007fff"': 35,
        '"0x65471f"': 36,
        '"0x0000ff"': 37,
        '"0x7f00ff"': 38,
        '"0xff0080"': 39,
        '"0xff00ff"': 40,
        '"0xffffff"': 41,
        '"0x999999"': 42,
        '"0x000000"': 43,
    }

    makecode.grobot_pixel_setcolourall = {
        block: ['input.colour'],
        type: action,
        arduino: block => {
            let { colour } = gen.scrape(block)
            let code = []
            let precode = []
            gen.Import('#include "GRobotDevice.h"')


            code = [
                `ledRing_wipeColor(${colour_map[colour.code]},0);\n`
            ]
            return code.join('')
        },
        python: block => {
            let { colour } = gen.scrape(block)
            gen.Import('import pixel')
            let fn = gen.Symbol('pixel.set_colour')
            let code = `await ${fn}(${colour.code},None,${gen.rid(block)})\n`
            return code
        },
        javascript: block => {
            let { colour } = gen.scrape(block)
            let code = `await stream('grobot_pixel_setcolourall', [${colour.code}],${gen.rid(block)});\n`
            return code
        }

    }
    makecode.grobot_pixel_setcoloursingle = {
        block: ['input.colour', 'input.position'],
        type: action,
        arduino: block => {
            let { colour, position } = gen.scrape(block)
            let code = []
            let precode = []
            gen.Import('#include "GRobotDevice.h"')
            code = [
                `ledRing_pxColor(${position.code}, ${colour.code});\n`
            ]
            return code.join('')
        },
        python: block => {
            let { colour, position } = gen.scrape(block)
            gen.Import('import pixel')
            let fn = gen.Symbol('pixel.set_colour')
            let code = `await ${fn}(${colour.code}, ${position.code},${gen.rid(block)})\n`
            return code
        },
        javascript: block => {
            let { colour, position } = gen.scrape(block)
            let code = `await stream('grobot_pixel_setcoloursingle", [${colour.code}, ${position.code}],${gen.rid(block)});\n`
            return code
        }

    }
    makecode.grobot_pixel_setoff = {
        block: [],
        type: action,
        arduino: block => {
            let { state } = gen.scrape(block)
            let code = []
            let precode = []
            gen.Import('#include "GRobotDevice.h"')
            code = [
                `ledRing_OFF();\n`
            ]
            return code.join('')
        },
        python: block => {
            gen.Import('import pixel')
            let fn = gen.Symbol('pixel.set_colour')
            let code = `await ${fn}('#000000', None,${gen.rid(block)})\n`
            return code
        },
        javascript: block => {
            let code = `await stream('grobot_pixel_setoff", [],${gen.rid(block)});\n`
            return code
        }

    }
    makecode.grobot_pixel_setwipe = {
        block: ['input.colour', 'input.speed'],
        type: action,
        arduino: block => {
            let { colour, speed } = gen.scrape(block)
            let code = []
            let precode = []
            gen.Import('#include "GRobotDevice.h"')
            code = [
                `ledRing_wipeColor(${colour_map[colour.code]}, ${speed.code});\n`
            ]
            return code.join('')
        },
        javascript: block => {
            let { colour, speed } = gen.scrape(block)
            return `await stream('grobot_pixel_setwipe", [${colour.code}, ${speed.code}],${gen.rid(block)});\n`
        },
        python: block => {
            let { colour, speed } = gen.scrape(block)
            gen.Import('import pixel')
            let fn = gen.Symbol('pixel.set_wipe')
            let code = `await ${fn}(${colour.code},${speed.code},${gen.rid(block)})\n`
            return code
        }
    }
    
    makecode.colorNumberPicker = {
        block: ['field.value'],
        type: value,
        arduino: block => {
            // var { value } = gen.scrape(block)
            // gen.b = block
            let value = block.getFieldValue('value')
            // console.warn("Value is", value, block.inputList[0].fieldRow[0])
            // gen.Import(`#include "kernel/pixel.h"`)
            let code = `pixel::strip_1.Color(0x${value.substring(2, 4)},0x${value.substring(4, 6)}, 0x${value.substring(6, 8)})`
            return [JSON.stringify({
                code: `"${makecode.props[block.id].value}"`,
                precode: [],
                static: []
            }), ORDER_NONE]


        },
        python: block => {
            if (window.optimizeGenerator) {
                let sym = gen.Symbol(`"${makecode.props[block.id].value}"`)
                return [JSON.stringify({
                    code: `${sym}`,
                    precode: [],
                    static: []
                }), ORDER_NONE]

            }
            else {

                return [JSON.stringify({
                    code: `"${makecode.props[block.id].value}"`,
                    precode: [],
                    static: []
                }), ORDER_NONE]
            }
        },
        javascript: block => {
            return [JSON.stringify({
                code: `"${makecode.props[block.id].value}"`,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.toggleOnOff = {
        block: ['field.on'],
        type: value,
        arduino: block => {
            return [block.getFieldValue('on'), ORDER_NONE]
        },
        python: block => {
            let on = block.getFieldValue('on')
            let map = {
                'true': 'ON',
                'false': 'OFF'
            }
            on = map[on]
            return [on, ORDER_NONE]
        },
        javascript: block => {
            let on = block.getFieldValue('on')
            let map = {
                'true': 'true',
                'false': 'false'
            }
            on = map[on]
            return [on, ORDER_NONE]
        },
    }
    makecode.logic_operation = {
        block: ['field.OP', 'input.A', 'input.B'],
        type: value,
        arduino: block => {
            let { op, a, b } = gen.scrape(block)
            console.log({ op, a, b })
            // this block does not has shadow on A and B, handle that case
            if (a.code === undefined) a.code = 'false'
            if (b.code === undefined) b.code = 'false'
            let code = []
            let precode = []
            let tvar = gen.tvar(block, 'bool', '')
            if (op == '"AND"') op = '&&'
            // op = 0 is a unknown bug, this is workaround
            if (op == '"OR"' || op == 0) op = '||'
            code = `(${a.code} ${op} ${b.code})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { op, a, b } = gen.scrape(block)
            gen.Import('import logic')
            if (a.code === undefined) a.code = 'False'
            if (b.code === undefined) b.code = 'False'

            if (op == '"AND"') op = 'all'
            if (op == '"OR"') op = 'any'
            let symbol = gen.Symbol(`logic.${op}`)
            let code = `await ${symbol}(${a.code},${b.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]

        }
    }
    makecode.break_keyword = {
        block: [],
        type: action,
        arduino: block => {
            return 'break;\n'
        },
        python: block => {
            return 'break\n'
        },
        javascript: block => {
            return 'break;\n'
        }
    }
    makecode.continue_keyword = {
        block: [],
        type: action,
        arduino: block => {
            return 'continue;\n'
        },
        python: block => {
            return 'continue\n'
        },
        javascript: block => {
            return 'continue;\n'
        }
    }


    makecode.input_motion_callback = {
        block: ['statement.HANDLER', 'field.port', 'field.event'],
        type: event,
        python: block => {
            let { HANDLER, port, event } = gen.scrape(block)
            let object = gen.object_name('motion_sensor', port)
            gen.Import(`import motion_sensor`)
            gen.Static(`${object} = motion_sensor.MotionSensor(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            // let fname = `${object}_${gen.event(event)}`
            // fname = gen.fname(block,object, event)
            let fname = gen.fname(block, object, event)
            let task = `async def ${fname}():\n${HANDLER}\n`
            // con
            gen.Task(task)
            gen.Setup(`await ${object}.callback(${gen.enum('motion_sensor', event)},${fname},${gen.rid(block)})\n`)
        }
    }
    makecode.iot_read_sound_button_cb = {}
    makecode.input_button_callback = {
        block: ['statement.HANDLER', 'field.port', 'field.event', 'field.btn'],
        type: event,
        arduino: block => {
        },
        python: block => {
            // while (true){console.log("ha")}
            let { HANDLER, port, event, btn } = gen.scrape(block)
            let object = gen.object_name('button', port)
            gen.Import(`import button`)
            gen.Static(`${object} = button.Button(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            // let fname = `${object}_${gen.event(event)}`
            // fname = gen.fname(block,object, event)
            let fname = gen.fname(block, object, event)
            let task = `async def ${fname}():\n${HANDLER}\n`
            // con
            gen.Task(task)
            gen.Setup(`await ${object}.callback(${gen.enum('button', event)},${gen.enum('button', btn)},${fname},${gen.rid(block)})\n`)
        }
    }
    makecode.input_button_readvalue = {
        block: ['field.port', 'field.btn'],
        type: value,
        python: block => {
            let { port, btn } = gen.scrape(block)
            let object = gen.object_name('button', port)
            gen.Import('import button')
            gen.Static(`${object} = button.Button(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.readpot(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }

    makecode.grobot_potswitch_callback = {
        block: ['statement.HANDLER', 'field.port', 'field.event'],
        type: event,
        // arduino: block => {
        // },
        python: block => {
            // while (true){console.log("ha")}
            let { HANDLER, port, event } = gen.scrape(block)
            let object = gen.object_name('potswitch', port)
            gen.Import(`import potswitch`)
            gen.Static(`${object} = potswitch.PotSwitch(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            // let fname = `${object}_${gen.event(event)}`
            // fname = gen.fname(block,object, event)
            let fname = gen.fname(block, object, event)
            let task = `async def ${fname}():\n${HANDLER}\n`
            // con
            gen.Task(task)
            gen.Setup(`await ${object}.callback(${gen.enum('potswitch', event)},${fname},${gen.rid(block)})\n`)
        }
    }
    makecode.input_button_checkevent = {
        block: ['field.port', 'field.event', 'field.btn'],
        type: value,
        arduino: block => {
            let { port, event, btn } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            event = `${gen.escape(event).split(".")[1]}`
            let code = ''
            let precode = []
            let tvar = gen.tvar(block, 'bool', '')
            code = `GetChannel_D(${port_map[port]})==1`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { port, event, btn } = gen.scrape(block)
            let object = gen.object_name('button', port)
            gen.Import('import button\n')
            gen.Static(`${object} = button.Button(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.check(${gen.enum('button', event)},${gen.enum('button', btn)},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    // makecode.input_laser_checkevent = {
    //     block: ['field.port', 'field.event'],
    //     type: value,
    //     arduino: block => {
    //         let { port, event } = gen.scrape(block)
    //         port = gen.escape(port).split(".")[1]
    //         event = `${gen.escape(event).split(".")[1]}`
    //         let code = ''
    //         let precode = []
    //         let tvar = gen.tvar(block, 'bool', '')
    //         code = `GetLaser(${port_map[port]})==1`
    //         return [JSON.stringify({
    //             code: code,
    //             precode: precode,
    //             static: []
    //         }), ORDER_NONE]
    //     },
    //     python: block => {
    //         let { port, event } = gen.scrape(block)
    //         let object = gen.object_name('button', port)
    //         gen.Import('import button\n')
    //         gen.Static(`${object} = button.Button(${port_map[port]})\n`)
    //         gen.Setup(`await ${object}.begin()\n`)
    //         let code = `await ${object}.check(${gen.enum('button', event)},${gen.rid(block)})`
    //         return [JSON.stringify({
    //             code: code, static: [], precode: []
    //         }), ORDER_NONE]
    //     }
    // }
    makecode.input_sound_checkstate = {
        block: ['field.port', 'field.event'],
        type: value,
        arduino: block => {
            let { port, event } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            event = `${gen.escape(event).split(".")[1]}`
            let code = ''
            let precode = []
            let tvar = gen.tvar(block, 'bool', '')
            code = `GetChannel_D(${port_map[port]})==1`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { port, event } = gen.scrape(block)
            let object = gen.object_name('sound', port)
            gen.Import('import sound_sensor')
            gen.Static(`${object} = sound_sensor.SoundSensor(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.check(${gen.enum('sound_sensor', event)},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.input_sound_read = {
        block: ['field.port'],
        type: value,
        arduino: block => {
            let { port } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            // event = `${gen.escape(event).split(".")[1]}`
            let code = ''
            let precode = []
            // let tvar = gen.tvar(block, 'bool', '')
            code = `GetChannel_A(${port_map[port]})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { port, event } = gen.scrape(block)
            let object = gen.object_name('sound', port)
            gen.Import('import sound_sensor')
            gen.Static(`${object} = sound_sensor.SoundSensor(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.read_loudness(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.input_sound_callback = {
        block: ['statement.HANDLER', 'field.port', 'field.event'],
        type: event,
        arduino: block => {
        },
        python: block => {
            let { HANDLER, port, event } = gen.scrape(block)
            let object = gen.object_name('sound_sensor', port)
            gen.Import(`import sound_sensor`)
            gen.Static(`${object} = sound_sensor.SoundSensor(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            // let fname = `${object}_${gen.event(event)}`
            // fname = gen.fname(block,object, event)
            let fname = gen.fname(block, object, event)
            let task = `async def ${fname}():\n${HANDLER}\n`
            // con
            gen.Task(task)
            gen.Setup(`await ${object}.callback(${gen.enum('sound_sensor', event)},${fname},${gen.rid(block)})\n`)
        }
    }
    makecode.input_distance_readvalue = {
        block: ['field.unit', 'field.port'],
        type: value,
        arduino: block => {
            let { unit, port } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            unit = `button::${gen.escape(unit).split(".")[1]}`
            let code = ''
            let tvar = gen.tvar(block, 'double', '')
            let precode = []
            gen.Import(`#include "GRobotDevice.h"`)
            code = `GetUltrasonicDistance(${port})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { unit, port } = gen.scrape(block)
            let object = gen.object_name('distancesensor', port)
            gen.Import('import distancesensor')
            gen.Static(`${object} = distancesensor.DistanceSensor(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.read_distance(${gen.enum('distancesensor', unit)},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.input_motion_read = {
        block: ['field.port', 'field.state'],
        type: value,
        arduino: block => {
            let { port, state } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            state = `button::${gen.escape(state).split(".")[1]}`
            let code = ''
            let tvar = gen.tvar(block, 'bool', '')
            let precode = []
            gen.Import('#include "GRobotDevice.h"')
            code = `(GetChannel_A(${port_map[port]}) > 400)`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { port, state } = gen.scrape(block)
            let event = state
            let object = gen.object_name('motion_sensor', port)
            gen.Import('import motion_sensor\n')
            gen.Static(`${object} = motion_sensor.MotionSensor(${port_map[port]}${gen.tar(block)})\n`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.check(${gen.enum('motion_sensor', event)},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.input_slider_readvalue = {
        block: ['field.port'],
        type: value,
        arduino: block => {
            let { unit, port } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            let code = ''
            let tvar = gen.tvar(block, 'double', '')
            let precode = []
            code = `GetChannel_A(${port_map[port]})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('potentiometer', port)
            gen.Import('import opamp_sensor')
            gen.Static(`${object} = opamp_sensor.OpampSensor(${port_map[port]}${gen.tar(block)})`)
            // this code must use opamp sensor

            let code = `await ${object}.read_analog(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    // makecode.input_gas_readvalue = {
    //     block: ['field.port'],
    //     type: value,
    //     arduino: block => {
    //         let { unit, port } = gen.scrape(block)
    //         port = gen.escape(port).split(".")[1]
    //         let code = ''
    //         let tvar = gen.tvar(block, 'double', '')
    //         let precode = []
    //         code = `GetChannel_A(${port_map[port]})`
    //         return [JSON.stringify({
    //             code: code,
    //             precode: precode,
    //             static: []
    //         }), ORDER_NONE]
    //     },
    //     python: block => {
    //         let { port } = gen.scrape(block)
    //         let object = gen.object_name('gas', port)
    //         gen.Import('import gas_sensor')
    //         gen.Static(`${object} = gas_sensor.GasSensor(${port_map[port]}${gen.tar(block)})`)
    //         let code = `await ${object}.read_gas_level(${gen.rid(block)})`
    //         return [JSON.stringify({
    //             code: code, static: [], precode: []
    //         }), ORDER_NONE]
    //     }
    // }
    makecode.input_light_readvalue = {
        block: ['field.port'],
        type: value,
        arduino: block => {
            let { unit, port } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            let code = ''
            let tvar = gen.tvar(block, 'double', '')
            let precode = []
            code = `GetChannel_A(${port_map[port]})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('light', port)
            gen.Import('import opamp_sensor')
            gen.Static(`${object} = opamp_sensor.OpampSensor(${port_map[port]}${gen.tar(block)})`)
            let code = `await ${object}.is_detected(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.input_proximity_readvalue = {
        block: ['field.port'],
        type: value,
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('proximity', port)
            gen.Import('import opamp_sensor')
            gen.Static(`${object}=opamp_sensor.OpampSensor(${port_map[port]})`)
            gen.Setup(`${object}._active_state=False\n`)
            let caller = gen.Symbol(`${object}.is_detected`)
            let code = `await ${caller}(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.input_light_readvalue_analog = {
        name: "read light level",
        block: ['field.port'],
        type: value,
        arduino: block => {
            let { unit, port } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            let code = ''
            let tvar = gen.tvar(block, 'double', '')
            let precode = []
            code = `GetChannel_A(${port_map[port]})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('light', port)
            gen.Import('import opamp_sensor')
            gen.Static(`${object} = opamp_sensor.OpampSensor(${port_map[port]}${gen.tar(block)})`)
            let code = `await ${object}.read_analog(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.input_gas_readvalue_analog = makecode.input_light_readvalue_analog
    makecode.input_flame_readvalue_analog = makecode.input_light_readvalue_analog
    makecode.input_light_readvalue = {
        block: ['field.port'],
        type: value,
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('light', port)
            gen.Import('import opamp_sensor')
            gen.Static(`${object} = opamp_sensor.OpampSensor(${port_map[port]}${gen.tar(block)})`)
            let code = `await ${object}.is_detected(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.input_gas_readvalue = makecode.input_light_readvalue
    makecode.input_water_readvalue = makecode.input_light_readvalue
    makecode.input_flame_readvalue = makecode.input_light_readvalue
    makecode.input_laser_checkevent = makecode.input_light_readvalue
    makecode.input_temperature_read = {
        block: ['field.port'],
        type: value,
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('temperature_sensor', port)
            gen.Import('import temperature_sensor')
            gen.Static(`${object}=temperature_sensor.DS18B20(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let method = gen.Symbol(`${object}.read_temperature`)
            let code = `await ${method}(${gen.rid(block)})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        }
    }

    makecode.input_weather_readvalue = {
        block: ['field.port', 'field.state'],
        type: value,
        arduino: block => {
            let { state, port } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            // state = `Read${gen.escape(state).split(".")[1]}`
            let code = ''
            let tvar = gen.tvar(block, 'double', '')
            let precode = []
            let method = ''
            gen.Import('#include "GRobotDevice.h"')
            if (state == '"WeatherReadEnum.Temperature"') {
                method = 'GetTemperature'
            } else {
                method = 'GetHumidity'
            }
            code = `${method}(${port_map[port]})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { state, port } = gen.scrape(block)
            let object = gen.object_name('weather_sensor', port)
            gen.Import('import weather_sensor')
            gen.Static(`${object} = weather_sensor.WeatherSensor(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.read(${gen.enum('weather_sensor', state)},${gen.rid(block)})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        }
    }
    makecode.device_pause = {
        block: ['input.pause'],
        type: action,
        python: block => {
            let { pause } = gen.scrape(block)
            gen.Import('import timer')
            if (window.optimizeGenerator) {
                return `await ${gen.Symbol('timer.wait')}(${pause.code},${gen.rid(block)})\n`
            }
            else {

                return `await timer.wait(${pause.code},${gen.rid(block)})\n`
            }
        },
        arduino: block => {
            let { pause } = gen.scrape(block)
            return `delay(${pause.code});\n`

        },
        javascript: block => {
            let { pause } = gen.scrape(block)
            return `await stream('delay_pause', [${pause.code}],${gen.rid(block)});\n`
        }
    }
    makecode.grobot_general_onstart = {
        block: ['statement.HANDLER'],
        type: event,
        arduino: block => {
            let { handler } = gen.scrape(block)
            let code = `${handler}`
            gen.Setup(code)
            gen.Setup('// onstart.martk\n')
        },
        python: block => {
            let { handler } = gen.scrape(block)
            let varstring = getVarString(block)
            let code = `async def usercode_begin():\n${varstring}${handler}\n`
            gen.Task(code)
            gen.Import('import coroutine')
            gen.Import('import uasyncio')

            // gen.Loop(`coroutine.createTask(usercode_begin)\n`)
        },
        javascript: block => {
            let { handler } = gen.scrape(block)
            let code = `var usercode_begin = async () => {\n${handler}\n}`
            gen.Task(code)
            // gen.Import('// grobot_general_onstart')
        }
    }
    makecode['pxt-on-start'] = {
        block: ['statement.HANDLER'],
        type: event,
        python: block => {
            let { handler } = gen.scrape(block)

        }
    }
    makecode.grobot_line_readmask2 = {
        block: ['input.c1', 'input.c2', 'field.port'],
        type: value,
        arduino: block => {
            let { c1, c2, port } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            let code = ''
            let precode = []
            let tvar = gen.tvar(block, 'bool', '')
            code = `GetFollowLine(${port_map[port]}, ${c1.code}, ${c2.code}, 3)`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { port, c1, c2 } = gen.scrape(block)
            let object = gen.object_name('line_sensor', port)
            gen.Import('import line_sensor')
            gen.Static(`${object} = line_sensor.LineSensor(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.check_all([${c1.code},${c2.code}],${gen.rid(block)})\n`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { port, c1, c2 } = gen.scrape(block)
            let code = `await stream('grobot_line_readmask2', [${port, c1.code, c2.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }

    }
    makecode.grobot_line_readsensor = {
        block: ['field.channel'],
        type: value,
        arduino: block => {
            let { channel } = gen.scrape(block)
            // port = gen.escape(port).split(".")[1]
            channel = parseInt(gen.escape(channel).split("LineSensorSelector.Sensor")[1])
            let code = ''
            let precode = []
            let tvar = gen.tvar(block, 'bool', '')
            gen.Import('#include "GSensorFL5.h"')
            gen.Setup("GetFL5Channel_Setup();\n")
            code = `GetFL5Channel_A(${channel - 1})`
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.pixel_colour = {
        block: ['input.r', 'input.g', 'input.b'],
        type: value,
        python: block => {
            let { r, g, b } = gen.scrape(block)
            gen.Import('import pixel')
            let code = `await pixel.color([${r.code},${g.code},${b.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { r, g, b } = gen.scrape(block)
            let code = `await stream('pixel_colour", [${r.code},${g.code},${b.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.grobot_line_readswitch = {
        block: [],
        type: value,
        arduino: block => {
            let tvar = gen.tvar(block, 'bool', '')
            let code = ''
            let precode = []
            return [JSON.stringify({
                code: code,
                precode: precode,
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.pxt_controls_of = {
        block: [],
        type: action
    }
    // makecode.pxt_controls_for_of = {
    //     block: ['input.var', 'statement.do', 'input.list'],
    //     type: action
    // }
    makecode.routine_timer_callback = {
        block: ['input.time', 'statement.HANDLER'],
        type: event,
        python: block => {
            let { time, HANDLER } = gen.scrape(block)
            let fname = gen.fname(block, 'routine', time.code)
            let code = `async def ${fname}():\n${HANDLER}`
            gen.Import('import coroutine')
            if (window.optimizeGenerator) {
                gen.Loop(`${gen.Symbol('coroutine.createRoutine')}(${fname},interval=${time.code},${gen.rid(block)})\n`)
                
            }
            else {
                gen.Loop(`coroutine.createRoutine(${fname},interval=${time.code},${gen.rid(block)})\n`)

            }
            gen.Task(code)
        }
    }
    makecode.timePicker_ = makecode.timePicker
    makecode.display_lcd_setclear = {
        block: ['field.port', 'field.line'],
        type: action,
        arduino: block => {
        },
        python: block => {
        }
    }
    makecode.display_lcd_settext = {
        block: ['field.port', 'input.text', 'field.line'],
        type: action,
        arduino: block => {
            // // gen.Import(`#include "kernel/lcd.h"`)
        },
        python: block => {
        }
    }
    makecode.display_lcd_setbacklight = {
        block: ['input.state', 'field.port'],
        type: action,
        arduino: block => {
        },
        python: block => {
        }
    }

    makecode.output_infrared_sound = {
        block: ['field.port', 'input.name'],
        type: action,
        python: block => {
            let { port, name } = gen.scrape(block)
            gen.Import('import infrared')
            gen.Static(`${object} = infrared.Infrared(${port_map[port]}`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.send_signal(${name.code},${gen.rid(block)})\n`
            return code
        }
    }

    makecode.output_pixel_setcolour = {
        block: ['field.port', 'input.colour'],
        type: action,
        // arduino: block => {
        //     let { port, colour } = gen.scrape(block)
        //     let code = []
        //     let precode = []
        // }
        python: block => {
            let { port, colour } = gen.scrape(block)
            let object = gen.object_name('pixel', port)
            gen.Import('import pixel')
            gen.Static(`${object} = pixel.Pixel(${port_map[port]})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.set_colour(${colour.code},None, ${gen.rid(block)})\n`
            return code
        }
    }
    makecode.output_pixel_setcoloursingle = {
        block: ['field.port', 'input.colour', 'input.position'],
        type: action,
        // arduino: block => {
        //     let { port, colour } = gen.scrape(block)
        //     let code = []
        //     let precode = []
        // }
        python: block => {
            let { port, colour, position } = gen.scrape(block)
            let object = gen.object_name('pixel', port)
            gen.Import('import pixel')
            gen.Static(`${object} = pixel.Pixel(${port_map[port]})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.set_colour(${colour.code},${position.code}, ${gen.rid(block)})\n`
            return code
        }
    }
    makecode.output_relay_setstate = {
        block: ['field.port', 'input.state'],
        type: action,
        arduino: block => {
            let { port, state } = gen.scrape(block)
            let code = []
            let precode = []
            gen.Import('#include "GRobotDevice.h"')
            code = [
                `wDigital(${port_map[port]}, ${state.code});\n`
            ]
            return code.join('')
        },
        python: block => {
            let { port, state } = gen.scrape(block)
            let object = gen.object_name('relay', port)

            gen.Import('import relay')
            gen.Static(`${object} = relay.Relay(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)


            let code = `await ${object}.turn(${state.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.output_laser_setstate = {
        block: ['field.port', 'input.state'],
        type: action,
        arduino: block => {
            let { port, state } = gen.scrape(block)
            let code = []
            let precode = []
            gen.Import('#include "GRobotDevice.h"')
            code = [
                `wDigital(${port_map[port]}, ${state.code});\n`
            ]
            return code.join('')
        },
        python: block => {
            let { port, state } = gen.scrape(block)
            let code = []
            let object = gen.object_name('relay', port)
            gen.Import('import relay')
            gen.Static(`${object} = relay.Relay(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            return `await ${object}.turn(${state.code},${gen.rid(block)})\n`
        }
    }
    makecode.output_led_setstate = {
        block: ['field.port', 'input.state'],
        type: action,
        arduino: block => {
            let { port, state } = gen.scrape(block)
            // port = gen.escape(port).split(".")[1]
            // state = `button::${gen.escape(state).split(".")[1]}`
            let code = []
            code = [
                `wDigital(${port_map[port]}, ${state.code});\n`
            ]
            return code.join('')
        },
        python: block => {
            let { port, state } = gen.scrape(block)
            let code = []
            let object = gen.object_name('led', port)
            gen.Import('import led')
            gen.Static(`${object} = led.LED(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            return `await ${gen.Symbol(`${object}.turn`)}(${state.code},${gen.rid(block)})\n`
        }
    }
    makecode.output_servo_setangle = {
        block: ['field.port', 'input.angle'],
        type: action,
        arduino: block => {
            let { port, angle } = gen.scrape(block)
            let code = []
            let precode = []
            // port = gen.escape(port).split(".")[1]
            gen.Import(`#include "GRobotMovements.h"`)
            gen.Setup(`GRobot_ServoAttach(${port_map[port]});\n`)
            code = [
                `GRobot_ServoWrite(${port_map[port]}, ${angle.code});\n`
            ]
            return code.join('')
        },
        python: block => {
            let { port, angle } = gen.scrape(block)
            let code = []
            // port = gen.escape(port).split(".")[1]
            let object = gen.object_name('servo', port)
            gen.Import('import servo')
            gen.Static(`${object} = servo.Servo(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let caller = gen.Symbol(`${object}.set_angle`)
            return `await ${caller}(${angle.code},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { port, angle } = gen.scrape(block)
            return `await stream('output_servo_setangle', [${port_map[port]},${angle.code}],${gen.rid(block)});\n`
        }
    }
    makecode.protractorPicker = {
        block: ['field.angle'],
        type: value,
        arduino: block => {
            let { angle } = gen.scrape(block)
            return [angle, ORDER_NONE]
        },
        python: block => {
            let { angle } = gen.scrape(block)
            return [angle, ORDER_NONE]
        },
        javascript: block => {
            let { angle } = gen.scrape(block)
            return [angle, ORDER_NONE]
        },
    }
    makecode.text = {
        block: ['field.TEXT'],
        type: value,
        arduino: block => {
            let value = block.getFieldValue('TEXT')
            if (value == 0) value = '""'
            else {
                value = `"${value}"`
            }
            return [value, ORDER_NONE]
        },
        python: block => {
            // let value = block.getFieldValue('TEXT')
            let value = makecode.props[block.id].TEXT
            if (value == 0) value = '""'
            else {
                value = `"${value}"`
            }

            if (window.optimizeGenerator) {
                value = gen.Symbol(value)
            }

            return [value, ORDER_NONE]
        },
        javascript: block => {
            // let value = block.getFieldValue('TEXT')
            let value = makecode.props[block.id].TEXT
            if (value == 0) value = '""'
            else {
                value = `"${value}"`
            }
            return [value, ORDER_NONE]
        },
    }
    makecode.logic_boolean = {
        block: ['field.BOOL'],
        type: value,
        arduino: block => {
            let { bool } = gen.scrape(block)
            bool = gen.escape(bool)
            if (bool == 'TRUE') bool = 'true'
            else bool = 'false'
            return [bool, ORDER_NONE]
        },
        python: block => {
            let { bool } = gen.scrape(block)
            bool = gen.escape(bool)
            if (bool == 'TRUE') bool = 'True'
            else bool = 'False'
            return [bool, ORDER_NONE]
        },
        javascript: block => {
            let { bool } = gen.scrape(block)
            bool = gen.escape(bool)
            if (bool == 'TRUE') bool = 'true'
            else bool = 'false'
            return [bool, ORDER_NONE]
        },
    }
    makecode.logic_stayed = {
        block: ['field.time', 'input.cond'],
        type: value,
        arduino: block => {
            let { bool } = gen.scrape(block)
            bool = gen.escape(bool)
            if (bool == 'TRUE') bool = 'true'
            else bool = 'false'
            return [bool, ORDER_NONE]
        }
    }
    makecode.logic_recently = {
        block: ['field.time', 'input.cond'],
        type: value,
        arduino: block => {
            let { bool } = gen.scrape(block)
            bool = gen.escape(bool)
            if (bool == 'TRUE') bool = 'true'
            else bool = 'false'
            return [bool, ORDER_NONE]
        }
    }
    makecode.toggleHighLow_ = {
        block: ['field.high'],
        type: value,
        arduino: (block) => {
            var high = block.getFieldValue('high')
            return [high, ORDER_NONE]
        },
        python: (block) => {
            var high = block.getFieldValue('high')
            var map = {
                'false': 'False',
                'true': 'True'
            }
            return [map[high], ORDER_NONE]
        },
        javascript: (block) => {
            var high = block.getFieldValue('high')
            var map = {
                'false': 'false',
                'true': 'true'
            }
            return [map[high], ORDER_NONE]
        },

    }
    // helper.buildMakecode(MakeCode);
    makecode.GRobot_Foward_ = {
        block: ['input.power'],
        type: action,
        arduino: block => {
            let { power } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_Forward(${power.code}, 0);\n`
        },
        python: block => {
            let { power } = gen.scrape(block)
            gen.Import('import motor')
            let fn = gen.Symbol('motor.forward')
            return `await ${fn}(${power.code},0,${gen.rid(block)})\n`
        },
        javascript: block => {
            let { power } = gen.scrape(block)
            return `await stream('GRobot_Forward_', [${power.code}],${gen.rid(block)});\n`
        }
    }
    makecode.calibrate_motors = {
        block: ['input.cond'],
        type: action,
        python: block => {
            let { cond } = gen.scrape(block)
            gen.Import('import motor')
            return `while not ${cond.code}:await motor.calibrate_motors(${gen.rid(block)})\n`
        }
    }
    makecode.GRobot_Back_ = {
        block: ['input.power'],
        type: action,
        arduino: block => {
            let { power } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_Back(${power.code}, 0);\n`
        },
        python: block => {
            let { power } = gen.scrape(block)
            gen.Import('import motor')
            return `await ${gen.Symbol('motor.backward')}(${power.code},0,${gen.rid(block)})\n`
        },
        javascript: block => {
            let { power } = gen.scrape(block)
            return `await stream('GRobot_Back_', [${power.code}],${gen.rid(block)});\n`
        }
    }
    makecode.GRobot_Foward_ms = {
        block: ['input.power', 'input.time'],
        type: action,
        arduino: block => {
            let { power, time } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_Forward(${power.code}, 0);delay(${time.code});\n`
        },
        python: block => {
            let { power, time } = gen.scrape(block)
            gen.Import('import motor')
            return `await motor.forward(${power.code}, ${time.code},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { power, time } = gen.scrape(block)
            return `await stream('GRobot_Forward_ms', [${power.code}, ${time.code}],${gen.rid(block)});\n`
        }
    }
    makecode.GRobot_Back_ms = {
        block: ['input.power', 'input.time'],
        type: action,
        arduino: block => {
            let { power, time } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_Back(${power.code}, 0);delay(${time.code});\n`
        },
        python: block => {
            let { power, time } = gen.scrape(block)
            gen.Import('import motor')
            return `await ${gen.Symbol('motor.backward')}(${power.code},${time.code},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { power, time } = gen.scrape(block)
            return `await stream('GRobot_Back_ms', [${power.code}, ${time.code}],${gen.rid(block)});\n`
        }

    }
    makecode.GRobot_Stop = {
        block: [],
        type: action,
        arduino: block => {
            let { } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_Stop();\n`
        },
        python: block => {
            // let { power } = gen.scrape(block)
            gen.Import('import motor')
            if (window.optimizeGenerator) {
                return `await ${gen.Symbol('motor.stop')}(${gen.rid(block)})\n`

            }
            else {
                return `await motor.stop(${gen.rid(block)})\n`
            }
        },
        javascript: block => {
            return `await stream('GRobot_Stop', [],${gen.rid(block)});\n`
        }

    }
    makecode.GRobot_RotateLeft_ = {
        block: ['input.power'],
        type: action,
        arduino: block => {
            let { power } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_RotateLeft(${power.code}, 0);\n`
        },
        python: block => {
            let { power } = gen.scrape(block)
            gen.Import('import motor')
            if (window.optimizeGenerator) {
                return `await ${gen.Symbol('motor.rotate_left')}(${power.code},${gen.rid(block)})\n`
                
            }
            else {

                return `await motor.rotate_left(${power.code},${gen.rid(block)})\n`
            }
        },
        javascript: block => {
            let { power } = gen.scrape(block)
            return `await stream('GRobot_RotateLeft_', [${power.code}],${gen.rid(block)});\n`
        }

    }
    makecode.GRobot_RotateRight_ = {
        block: ['input.power'],
        type: action,
        arduino: block => {
            let { power } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_RotateRight(${power.code}, 0);\n`
        },
        python: block => {
            let { power } = gen.scrape(block)
            gen.Import('import motor')
            if (window.optimizeGenerator) {
                return `await ${gen.Symbol('motor.rotate_right')}(${power.code},${gen.rid(block)})\n`

            }
            else {
                return `await motor.rotate_right(${power.code},${gen.rid(block)})\n`

            }
        },
        javascript: block => {
            let { power } = gen.scrape(block)
            return `await stream('GRobot_RotateRight_', [${power.code}],${gen.rid(block)});\n`
        }

    }
    makecode.GRobot_TurnLeft_ = {
        block: ['input.power'],
        type: action,
        arduino: block => {
            let { power } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_TurnLeft(${power.code}, 0);\n`
        },
        python: block => {
            let { power } = gen.scrape(block)
            gen.Import('import motor')
            if (window.optimizeGenerator) {
                return `await ${gen.Symbol('motor.turn_left')}(${power.code},${gen.rid(block)})\n`
                
            }
            else {
                            return `await motor.turn_left(${power.code},${gen.rid(block)})\n`

            }
        },
        javascript: block => {
            let { power } = gen.scrape(block)
            return `await stream('GRobot_TurnLeft_', [${power.code}],${gen.rid(block)});\n`
        }

    }
    makecode.GRobot_TurnRight_ = {
        block: ['input.power'],
        type: action,
        arduino: block => {
            let { power } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_TurnRight(${power.code}, 0);\n`
        },
        python: block => {
            let { power } = gen.scrape(block)
            gen.Import('import motor')
            if (window.optimizeGenerator) {
                return `await ${gen.Symbol('motor.turn_right')}(${power.code},${gen.rid(block)})\n`
                
            }
            else {
                return `await motor.turn_right(${power.code},${gen.rid(block)})\n`

            }
        },
        javascript: block => {
            let { power } = gen.scrape(block)
            return `await stream('GRobot_TurnRight_', [${power.code}],${gen.rid(block)});\n`
        }

    }
    makecode.GRobot_motor_1_ = {
        block: ['input.power'],
        type: action,
        arduino: block => {
            let { power } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_motor_1(${power.code}, 0);\n`
        },
        python: block => {
            let { power } = gen.scrape(block)
            gen.Import('import motor')
            if (window.optimizeGenerator) {
                return `await ${gen.Symbol('motor.set_power')}(0, ${power.code},${gen.rid(block)})\n`
            }
            else {
                return `await motor.set_power(0,${power.code},${gen.rid(block)})\n`

            }
        },
        javascript: block => {
            let { power } = gen.scrape(block)
            return `await stream('GRobot_motor_1_', [${power.code}],${gen.rid(block)});\n`
        }

    }
    makecode.GRobot_motor_2_ = {
        block: ['input.power'],
        type: action,
        arduino: block => {
            let { power } = gen.scrape(block)
            gen.Import('#include "GRobotMovements.h"')
            return `GRobot_motor_2(${power.code}, 0);\n`
        },
        python: block => {
            let { power } = gen.scrape(block)
            gen.Import('import motor')
            if (window.optimizeGenerator) {
                return `await ${gen.Symbol('motor.set_power')}(1, ${power.code},${gen.rid(block)})\n`
            }
            else {
                return `await motor.set_power(1,${power.code},${gen.rid(block)})\n`

            }
        },
        javascript: block => {
            let { power } = gen.scrape(block)
            return `await stream('GRobot_motor_2_', [${power.code}],${gen.rid(block)});\n`
        }

    }
    makecode.SetBuzzer = {
        block: ['input.state'],
        type: action,
        arduino: block => {
            let { state } = gen.scrape(block)
            gen.Import('#include "GRobotDevice.h"')
            return `buzzer(${state.code});\n`
        },
        python: block => {
            let { state } = gen.scrape(block)
            gen.Import('import board')
            return `await board.SetBuzzer(${state.code},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { state } = gen.scrape(block)
            return `await stream('SetBuzzer', [${state.code}],${gen.rid(block)});\n`
        }
    }
    makecode.GetButtonOnboard = {
        block: [],
        type: value,
        arduino: block => {
            gen.Import('#include "ModeButton.h"')
            return [JSON.stringify({
                code: 'GetButtonOnboard()==0',
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            gen.Import('import board')
            let code = `await board.GetButtonOnboard(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let code = `await stream('GetButtonOnboard', [],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        }
    }
    makecode.ls_state_picker_ = {
        block: ['field.state'],
        python: block => {
            let { state } = gen.scrape(block)
            let code = `${port_map[state]}`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.ls_state_picker__ = makecode.ls_state_picker_
    makecode.GetFL5Channel = {
        block: ['field.channel'],
        type: value,
        arduino: block => {
            let { channel } = gen.scrape(block)
            // channel = parseInt(channel.split('FL5Channel.Channel')[1], 10)
            channel = port_map[channel]
            gen.Import('#include "GSensorFL5.h"')
            gen.Setup("GetFL5Channel_Setup();\n")
            return [JSON.stringify({
                code: `GetFL5Channel_A(${channel - 1})`,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { channel } = gen.scrape(block)
            // channel = parseInt(channel.split('FL5Channel.Channel')[1], 10)
            channel = port_map[channel]
            gen.Import('import line_sensor')
            gen.Setup('await line_sensor.setup()\n')
            let fn = gen.Symbol('line_sensor.get_channel')
            let code = `await ${fn}(${channel},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { channel } = gen.scrape(block)
            // channel = parseInt(channel.split('FL5Channel.Channel')[1], 10)
            channel = port_map[channel]
            let code = `await stream('GetFL5Channel', [${channel}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        }
    }
    makecode.GetFL5Channel_V2 = makecode.GetFL5Channel // update on 12/05/2023 on line state
    makecode.GetFL5Channel_B = {
        block: ['input.c1', 'input.c2', 'input.c3', 'input.c4'],
        type: value,
        arduino: block => {
            let { c1, c2, c3, c4 } = gen.scrape(block)
            // channel = parseInt(channel.split('FL5Channel.Channel')[1], 10)
            gen.Import('#include "GSensorFL5.h"')
            gen.Setup("GetFL5Channel_Setup();\n")
            return [JSON.stringify({
                code: `GetFL5Channel_B(${c1.code}, ${c2.code}, ${c3.code}, ${c4.code})`,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        python: block => {
            let { c1, c2, c3, c4 } = gen.scrape(block)
            gen.Import('import line_sensor')
            gen.Setup('await line_sensor.setup()\n')
            let code = `await ${gen.Symbol('line_sensor.check_all')}([${c1.code},${c2.code},${c3.code},${c4.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { c1, c2, c3, c4 } = gen.scrape(block)
            let code = `await stream('GetFL5Channel_B', [${c1.code},${c2.code},${c3.code},${c4.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        }
    }
    let song_map = {
        '"MusicSongSelector.HappyBirthday"': 0,
        '"MusicSongSelector.HappyNewYear"': 1,
        '"MusicSongSelector.KiaConBuomVang"': 2,
        '"MusicSongSelector.KissTheRain"': 3,
        '"MusicSongSelector.JingleBell"': 4,
    }
    makecode.Musics_Soundtrack = {
        block: ['field.song'],
        type: action,
        arduino: block => {
            let { song } = gen.scrape(block)
            gen.Import('#include "GRobotSound.h"')

            return `Music_Soundtrack(${song_map[song]}); // ${song}\n`
        },
        python: block => {
            let { song } = gen.scrape(block)
            gen.Import('import buzzer')
            return `await buzzer.play_melody(melody="${song.split('.')[1].replace('"', '')}",${gen.rid(block)})\n`
        }
    }
    let note_map = {
        '"GNote.C1"': 33,
        '"GNote.D1"': 37,
        '"GNote.E1"': 41,
        '"GNote.F1"': 44,
        '"GNote.G1"': 49,
        '"GNote.A1"': 55,
        '"GNote.B1"': 62,
        '"GNote.C2"': 65,
        '"GNote.D2"': 73,
        '"GNote.E2"': 82,
        '"GNote.F2"': 87,
        '"GNote.G2"': 98,
        '"GNote.A2"': 110,
        '"GNote.B2"': 123,
        '"GNote.C3"': 131,
        '"GNote.D3"': 147,
        '"GNote.E3"': 165,
        '"GNote.F3"': 175,
        '"GNote.G3"': 196,
        '"GNote.A3"': 220,
        '"GNote.B3"': 247,
        '"GNote.C4"': 262,
        '"GNote.D4"': 294,
        '"GNote.E4"': 330,
        '"GNote.F4"': 349,
        '"GNote.G4"': 392,
        '"GNote.A4"': 440,
        '"GNote.B4"': 494,
        '"GNote.C5"': 523,
        '"GNote.D5"': 587,
        '"GNote.E5"': 659,
        '"GNote.F5"': 698,
        '"GNote.G5"': 784,
        '"GNote.A5"': 880,
        '"GNote.B5"': 988,
        '"GNote.C6"': 1047,
        '"GNote.D6"': 1175,
        '"GNote.E6"': 1319,
        '"GNote.F6"': 1397,
        '"GNote.G6"': 1568,
        '"GNote.A6"': 1760,
        '"GNote.B6"': 1976,
        '"GNote.C7"': 2093,
        '"GNote.D7"': 2349,
        '"GNote.E7"': 2637,
        '"GNote.F7"': 2794,
        '"GNote.G7"': 3136,
        '"GNote.A7"': 3520,
        '"GNote.B7"': 3951,
        '"GNote.C8"': 4186,
        '"GNote.D8"': 4699
    }

    let notelength_map = {
        '"NoteLength.S4"': '4',
        '"NoteLength.S2"': '2',
        '"NoteLength.S1"': '1',
        '"NoteLength.S12"': '1/2',
        '"NoteLength.S14"': '1/4',
        '"NoteLength.S18"': '1/8',
        '"NoteLength.S116"': '1/16',
    }
    makecode.Musics_Basic = {
        block: ['field.note', 'input.beat'],
        type: action,
        arduino: block => {
            let { note, beat } = gen.scrape(block)
            gen.Import('#include "GRobotSound.h"')
            return `PlayNote_Basic(${note_map[note]}, ${beat.code}); // playnote ${note}\n`
        },
        python: block => {
            gen.Import('import buzzer')
            let { note, beat } = gen.scrape(block)
            console.warn({ note, beat }, 'HHEEH')

            // belong to garastem.py
            return `await ${gen.Symbol('buzzer.PlayNote_Basic')}(${note},${notelength_map
            [beat]},${gen.rid(block)})\n`
        },
        // javascript: block => {
        //     let { note, beat } = gen.scrape(block)
        //     return `await stream('Musics_Basic", [${note_map[note]}, ${beat.code}],${gen.rid(block)});\n`
        // }
    }
    makecode.PlayTone = {
        block: ['input.freq', 'input.time'],
        type: action,
        arduino: block => {
            let { freq, time } = gen.scrape(block)
            gen.Import('#include "GRobotSound.h"')
            return `PlayTone(${freq.code}, ${time.code});\n`
        },
        python: block => {
            let { freq, time } = gen.scrape(block)
            gen.Import('import buzzer')
            return `await ${gen.Symbol('buzzer.PlayTone')}(${freq.code},${time.code},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { freq, time } = gen.scrape(block)
            return `await stream('PlayTone", [${freq.code},${time.code}],${gen.rid(block)});\n`
        }
    }
    makecode.PlayNote = {
        block: ['input.note', 'input.time'],
        type: action,
        arduino: block => {
            let { note, time } = gen.scrape(block)
            gen.Import('#include "GRobotSound.h"')
            return `PlayNote(${note.code}, ${time.code});\n`
        },
        python: block => {
            let { note, time } = gen.scrape(block)
            gen.Import('import buzzer')
            window.note = note
            return `await ${gen.Symbol('buzzer.PlayTone')}(${note},${time.code},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { note, time } = gen.scrape(block)
            return `await stream('PlayNote", [${note.code},${time.code}],${gen.rid(block)});\n`
        }

    }
    makecode.PlayNote_ = {
        block: ['input.semi', 'input.beat'],
        type: action,
        arduino: block => {
            let { semi, beat } = gen.scrape(block)
            gen.Import('#include "GRobotSound.h"')
            gen.Variable('int _bpm = 120;\n')
            return `PlayNote(${semi.code},(long)(${beat.code})*1000*60/(long)(_bpm));\n\n`
        },
        python: block => {
            let { semi, beat } = gen.scrape(block)
            gen.Import('import buzzer')
            return `await PlayNote(${semi.code}, ${beat.code},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { semi, beat } = gen.scrape(block)
            return `await stream('PlayTone_", [${semi.code},${beat.code}],${gen.rid(block)});\n`
        }
    }
    makecode.SetBPM = {
        block: ['input.bpm',],
        type: action,
        arduino: block => {
            let { bpm } = gen.scrape(block)
            gen.Import('#include "GRobotSound.h"')
            gen.Variable('int _bpm = 120;\n')
            return `_bpm = ${bpm.code};\n`
        },
        python: block => {
            let { bpm } = gen.scrape(block)
            gen.Import('import buzzer')
            return `await ${gen.Symbol('buzzer.SetBPM')}(${bpm.code},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { bpm } = gen.scrape(block)
            return `await stream('SetBPM", [${bpm.code}],${gen.rid(block)});\n`
        }

    }
    makecode.PlayMute = {
        block: ['input.beat',],
        type: action,
        arduino: block => {
            let { beat } = gen.scrape(block)
            gen.Import('#include "GRobotSound.h"')
            gen.Variable('int _bpm = 120;\n')
            return `delay((long)(${beat.code})*1000*60/(long)(_bpm));\n`
        },
        python: block => {
            let { beat } = gen.scrape(block)
            gen.Import('import buzzer')
            return `await buzzer.PlayMute(${notelength_map[beat]},${gen.rid(block)})\n`
        },
        javascript: block => {
            let { beat } = gen.scrape(block)
            return `await stream('PlayMute", [${beat.code}],${gen.rid(block)});\n`
        }

    }
    makecode.Reset_Timing = {
        block: [],
        type: action,
        arduino: block => {
            gen.Import('#include "GRobotTimer.h"')
            return `reset_timing();\n`
        }
    }
    makecode.Get_Timing = {
        block: [],
        type: value,
        arduino: block => {
            gen.Import(`#include "GRobotTimer.h"`)
            return [JSON.stringify({
                code: `get_timing()`,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.Timing = {
        block: ['input.time'],
        type: value,
        arduino: block => {
            let { time } = gen.scrape(block)
            gen.Import('#include "GRobotTimer.h"')
            return [JSON.stringify({
                code: `timing(${time.code})`,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.SerialPrintln = {
        block: ['input.s'],
        type: action,
        arduino: block => {
            let { s } = gen.scrape(block)
            return `Serial.println(${s.code});\n`
        }
    }
    makecode.LCDPrint = {
        block: ['input.text', 'input.column', 'input.row'],
        type: action,
        arduino: block => {
            let { text, column, row } = gen.scrape(block)
            text.code = text.code || ""
            let code = `LCD_Print(String(${text.code}), ${column.code}, ${row.code});\n`
            return code
        },
        python: block => {
            let { text, column, row } = gen.scrape(block)
            text.code = text.code || '""'
            let code = `await lcd.print(${text.code},${column.code},${row.code},${gen.rid(block)})\n`
            gen.Import('import lcd')
            return code
        },
        javascript: block => {
            let { text, column, row } = gen.scrape(block)
            text.code = text.code || '""'
            return `await stream('LCDPrint", [${text.code},${column.code},${row.code}],${gen.rid(block)});\n`

        }
    }
    makecode.LCD_clear = {
        block: [],
        type: action,
        arduino: block => {
            // let { text, column, row } = gen.scrape(block)
            let code = `LCD_clear();\n`
            return code
        },
        python: block => {
            gen.Import('import lcd')
            return `await lcd.clear(${gen.rid(block)})\n`
        },
        javascript: block => {
            return `await stream('LCD_clear", [],${gen.rid(block)});\n`
        }
    }
    makecode.SoftwareSerialMaster = {
        block: ['field.port', 'field.role'],
        type: action,
        arduino: block => {
            let { port, role } = gen.scrape(block)
            port = port.split('.')[1].split('"')[0]
            let role_map = {
                '"SoftwareSerialRole.Master"': 1,
                '"SoftwareSerialRole.Slave"': 0
            }
            port = port_map[port]
            let code = `(${role_map[role]} == 1) ? mySoftwareSerial.begin(pinD[${port}], pinA[${port}], 9600) : mySoftwareSerial.begin(pinA[${port}], pinD[${port}], 9600);`
            gen.Import('#include "GSoftwareSerial.h"')
            gen.Variable('SoftwareSerial mySoftwareSerial(0,0);\n')
            gen.Setup(code)
            return '';
        }
    }
    makecode.SoftwareSerialAvailable = {
        block: [],
        type: value,
        arduino: block => {
            return [JSON.stringify({
                code: `mySoftwareSerial.available()`,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.SoftwareSerialRead = {
        block: [],
        type: value,
        arduino: block => {
            return [JSON.stringify({
                code: `char(mySoftwareSerial.value())`,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.SoftwareSerialPrintln = {
        block: ['input.s'],
        type: action,
        arduino: block => {
            let { s } = gen.scrape(block)
            return `mySoftwareSerial.println(${s.code});\n`
        }
    }
    makecode.function_definition = {
        block: ['field.function_name', 'statement.STACK'],
        type: event,
        arduino: block => {
            let { function_name, stack } = gen.scrape(block)
            console.log({ function_name, stack })
        },
        python: block => {
            
            let { function_name, stack } = gen.scrape(block)
            // get all the child nodes that is a variables
            window.fblock = block
            let vars = {}
            let varstring = getVarString(block)
            let agsList = []
            let mappingList = []
            for (var inp of block.inputList) {
                if (inp.type != Blockly.INPUT_VALUE) continue 
                // variable name, we dont support local variable, therefore there is no need for an input
                // but for each input, we must map it into global scope. otherwise the
                // henc. we first create a private variable, with additional underscore, then we ma it with its global counterpart

                let variableName = inp.connection.targetConnection.sourceBlock_.inputList[0].fieldRow[0].value_;
                agsList.push(variableName) // this is the variable name that will be placed as argument
            }

            // let argString = agsList.join(',')
            let localArgList = []
            agsList.forEach(variableName => {
                let localName = '__' + gen.safe(variableName)
                let globalName = gen.safe(variableName)

                localArgList.push(localName);
                mappingList.push(`${globalName}=${localName}`)
            })

            

            let argString = localArgList.join(',')
            let mapString = mappingList.join(';')


            let functionName = gen.Symbol(`fn_${gen.safe(function_name.substring(1, function_name.length - 1))}`)
            let code = `async def ${functionName}(${argString}):\n${varstring}\n${I}${mapString}\n${stack}\n`
            
            gen.Task(code)
        }
    }
    makecode.argument_reporter_common = {
        block: [],
        type: value, 
        python: block => {
            return [JSON.stringify({
                code: gen.safe(block.inputList[0].fieldRow[0].value_),
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.argument_reporter_boolean = makecode.argument_reporter_common
    makecode.argument_reporter_number = makecode.argument_reporter_common
    makecode.argument_reporter_string = makecode.argument_reporter_common
    makecode.argument_reporter_array =  makecode.argument_reporter_common
    makecode.argument_reporter_sprite =  makecode.argument_reporter_common
    makecode.argument_reporter_custom = makecode.argument_reporter_common
    makecode.function_call_output = {
        block: [],
        type: value,
        python: block => {
            var fn = block.getInput("function_name").fieldRow[0].value_;
            fn = gen.safe(fn)
            fn = gen.Symbol(`fn_${fn}`)
            var inputList = block.inputList.slice(2, block.inputList.length)
            var agsList = []
            for (var inp of inputList) {
                if (inp.type == Blockly.INPUT_VALUE) {
                    var value = gen.valueToCode(block, inp.name, Blockly.Python.ORDER_NONE)
                    if (typeof value === 'string' && value.startsWith("{")) {
                        value = JSON.parse(value).code
                    }
                    agsList.push(value)
                }
            }

            window.oblock = block
            window.oargs = agsList
            return [JSON.stringify({
                code: `(await ${fn}(${agsList.join(',')}))`,
                precode: [],
                static: []
            }), ORDER_NONE]
            
        }
    }
    makecode.function_call = {
        block: [],
        type: action,
        arduino: block => {
            gen.bb = block

            // console.log(eval(block))
            // console.warn("Block", Object.keys(block.inputList_))
            return 'await function_call()'
        },
        python: block => {
            var fn = block.getInput("function_name").fieldRow[0].value_;
            fn = gen.safe(fn)
            var inputList = block.inputList.slice(2, block.inputList.length)
            var agsList = []
            for (var inp of inputList) {
                if (inp.type == Blockly.INPUT_VALUE) {
                    var value = gen.valueToCode(block, inp.name, Blockly.Python.ORDER_NONE)
                    if (typeof value === 'string' && value.startsWith("{")) {
                        value = JSON.parse(value).code
                    }
                    agsList.push(value)
                }
            }

            window.fcall = block
            let functionName = gen.Symbol(`fn_${fn}`)
            return `await ${functionName}(${agsList.join(',')})\n`
            // window.function_call = block
            // let fname = block.inputList[1].fieldRow[0].value_
            // return `await fn_${gen.safe(fname)}()\n`
        }
    }
    makecode.function_return = {
        block: ['input.return_value'],
        type: action,
        python: block => {
            let { return_value } = gen.scrape(block)
            return `return ${return_value.code}\n`
        }
    }
        

    makecode.current_ticksms = {
        block: ['field.type'],
        python: block => {
            gen.Import('import time\n')
            let { type } = gen.scrape(block)

            let code = `${port_map[type]}`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.network_wifi_setconnect = {
        block: ['input.ssid', 'input.password'],
        type: action,
        python: block => {
            let { ssid, password } = gen.scrape(block)
            // let ssid = block.getFieldValue('ssid')
            // let password = block.getFieldValue('password')
            gen.Import('import wifi')
            gen.known_networks = gen.known_networks || {}
            gen.known_networks[ssid.code] = password.code
            return `await wifi.add(${ssid.code}, ${password.code},${gen.rid(block)})\n`
        },
    }
    makecode.network_wifi_setwait = {
        block: [],
        type: action,
        python: block => {
            gen.Import('import wifi')
            return `await wifi.wait(${gen.rid(block)})\n`
        }
    }
    makecode.network_wifi_isconnected = {
        block: [],
        type: value,
        python: block => {
            gen.Import('import wifi')
            let code = `await wifi.is_connected(${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.cloud_ifttt_config = {
        block: ['input.key'],
        type: action,
        python: block => {
            let { key } = gen.scrape(block)
            gen.Import('import ifttt')
            let code = `await ifttt.config(${key.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.cloud_ifttt_write = {
        block: ['input.topic'],
        type: action,
        python: block => {
            let { topic } = gen.scrape(block)
            gen.Import('import ifttt')
            let code = `await ifttt.trigger(${topic.code},${gen.rid(block)})\n`
            return code
        }
    }

    makecode.cloud_thinkspeak_config = {
        block: ['input.key'],
        type: action,
        python: block => {
            let { key } = gen.scrape(block)
            gen.Import('import thingspeak')
            let code = `await thingspeak.config(${key.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.cloud_thinkspeak_update = {
        block: ['input.channel', 'input.value'],
        type: action,
        python: block => {
            let { topic, value } = gen.scrape(block)
            gen.Import('import thingspeak')
            let code = `await thingspeak.trigger(${topic.code}, ${value.code},${gen.rid(block)})\n`
            return code
        }
    }


    makecode.cloud_clock_event = {
        block: ['field.date', 'input.hour', 'input.minute', 'statement.HANDLER'],
        type: event,
        python: block => {
            let { date, hour, minute, HANDLER } = gen.scrape(block)
            gen.Import('import clock')
            // gen.Setup('await clock.sync_ntp()\n')
            let function_name = gen.safe(`clock_event_${date}_${hour.code}_${minute.code}`)
            let code = `async def ${function_name}():\n${HANDLER}\n`
            gen.Task(code)
            gen.Setup(`await clock.callback(${gen.enum('clock', date)}, {'hour': ${hour.code}, 'minute': ${minute.code}}, ${function_name},${gen.rid(block)})\n`)

        }
    }
    makecode.cloud_clock_format = {
        block: ['input.format'],
        type: value,
        python: block => {
            let { format } = gen.scrape(block)
            gen.Import('import clock')
            let code = `await clock.strftime(${format.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        }
    }
    makecode.device_name = {
        block: [],
        type: value,
        python: block => {
            gen.Import('import board')
            let code = `await board.get_name(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        }
    }
    makecode.makecode_graph_create = {
        block: ['input.cells', 'input.worksheet', 'input.workbook'],
        type: action,
    }
    makecode.sheet_add_line = {
        block: ['input.cells', 'input.worksheet', 'input.workbook'],
        type: action,
        python: block => {
            let { cells, worksheet, workbook } = gen.scrape(block)
            gen.Import('import google')
            let code = `await google.sheet_add_line(${workbook.code}, ${worksheet.code}, ${cells.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.cloud_clock_get = {
        block: ['field.type'],
        type: value,
        python: block => {
            let { type } = gen.scrape(block)
            gen.Import('import clock')
            // gen.Setup('await clock.sync_ntp()\n')
            let code = `await clock.get(${gen.enum('clock', type)},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]


        }
    }

    makecode.cloud_join_group = {
        block: ['input.name', 'input.password'],
        type: action,
        python: block => {
            let { name, password } = gen.scrape(block)
            gen.Import('import group')
            let code = `await group.join({name.code},${password.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.cloud_write_channel = {
        block: ['input.value', 'input.channel', 'input.group'],
        type: action,
        python: block => {
            let { value, group, channel } = gen.scrape(block)
            gen.Import('import group')
            let code = `await group.write(${group.code},${channel.code},${value.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.cloud_event_channel = {
        block: [
            'input.HANDLER_DRAG_PARAM_message',
            // 'input.HANDLER_DRAG_PARAM_group',
            // 'input.HANDLER_DRAG_PARAM_sender',
            'input.channel',
            'input.group',
            'statement.HANDLER',
        ],
        type: event,
        python: block => {
            let {
                handle_drag_param_message,
                // handle_drag_param_group,
                // handle_drag_param_sender,
                group,
                handler,
                channel
            } = gen.scrape(block)
            gen.Import('import group')
            channel = channel.code.replace('GroupChannelList.', '')
            let function_name = `handle_group_${gen.escape(group.code)}_${gen.escape(channel)}`
            let changeVariable = [
                `global usr_message`,
                // `global usr_sender`,
                // `global usr_group`,
                `usr_message = _message`,
                // `usr_sender = _sender`,
                // `usr_group = _group`,

            ].join(`\n${I}`)
            let code = `async def ${function_name}(_message):\n${I}${changeVariable}\n${handler}\n`
            gen.Task(code)
            gen.Setup(`await group.callback(${group.code},${channel},${function_name},${gen.rid(block)})\n`)
        }
    }
    makecode.cloud_channels = {
        block: ['field.channel'],
        type: value,
        python: block => {
            let { channel } = gen.scrape(block)
            let code = channel.replace('GroupChannelList.', '')
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        }
    }
    makecode.cloud_send_messenger = {
        block: ['input.message', 'input.sender'],
        type: action,
        python: block => {
            let { sender, message } = gen.scrape(block)
            gen.Import('import messenger')
            let code = `await messenger.send_message(${sender.code},${message.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.iot_read_camera = {
        block: ['field.port'],
        type: value,
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('camera', port)
            gen.Import('import camera')
            gen.Static(`${object} = camera.Camera(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code
            // if surround is makecode_ml_matchimage
            let parentType = block.getSurroundParent().type
            let format
            if (parentType == 'makecode_ml_matchimage') {
                // this is a offside cpu process, just reteturn reference
                format = '"microlite"'
            }
            else {
                format = '"link"'
            }


            code = `await ${object}.capture(${format},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.makecode_webcam_image = {
        block: [],
        type: value,
        python: block => {
            // let { port } = gen.scrape(block)
            // let object = gen.object_name('camera', port)
            gen.Import('import makecode')
            gen.Setup(`await makecode.begin_webcam()\n`)
            let code = `await makecode.webcam_capture(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.makecode_speaker_say = {
        block: ['input.text'],
        type: action,
        python: block => {
            let { text } = gen.scrape(block)
            gen.Import('import makecode')
            gen.Setup('await makecode.begin()\n')
            let code = `await makecode.speaker_say(${text.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.cloud_handle_messenger = {
        block: ['input.HANDLER_DRAG_PARAM_message', 'input.sender', 'statement.HANDLER'],
        type: event,
        python: block => {
            let { handle_drag_param_message, handler, sender } = gen.scrape(block)
            gen.Import('import messenger')
            let function_name = gen.safe(`handle_messenger_from_${sender.code}`)
            let changeVariable = [
                `global usr_message`,
                `global usr_sender`,
                `usr_message = _message`,
                `usr_sender = _sender`,
                `print(">>>", usr_sender, usr_message)`

            ].join(`\n${I}`)
            let code = `async def ${function_name}(_message,_sender):\n${I}${changeVariable}\n${handler}\n`
            gen.Task(code)
            gen.Setup(`await messenger.callback(${sender.code},${function_name},${gen.rid(block)})\n`)
        }
    }
    makecode.cloud_id_messenger = {
        block: ['input.userid'],
        type: value,
        python: block => {
            let { userid } = gen.scrape(block)
            let code = userid.code

            gen.Import('import messenger')
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.homekit_accessory_event = {
        block: ['field.accessory', 'input.name', 'input.HANDLER_DRAG_PARAM_charact', 'input.HANDLER_DRAG_PARAM_value', 'statement.HANDLER'],
        type: event,
        python: block => {
            let {
                accessory,
                name,
                handler,
                handler_drag_param_value,
                handler_drag_param_charact,
            } = gen.scrape(block)
            accessory = gen.escape(accessory).replace('ServiceType', 'smarthome.homekit.Service')
            gen.Import('import smarthome')
            let function_name = gen.safe(`handle_homekit_${accessory}_${name.code}`)
            let changeVariable = [
                `global usr_charact`,
                `global usr_value`,
                `usr_charact = _charact`,
                `usr_value = _value`,

            ].join(`\n${I}`)
            let code = `async def ${function_name}(_charact,_value):\n${I}${changeVariable}\n${handler}\n`
            gen.Task(code)
            gen.Setup(`await smarthome.homekit_callback(accessory=${accessory},name=${name.code},callback=${function_name},${gen.rid(block)})\n`)
            gen.Setup(`await smarthome.homekit_start()\n`)


        }
    }
    makecode.homekit_accessory_set = {
        block: ['field.charact', 'input.value', 'input.name'],
        type: action,
        python: block => {
            let { charact, value, name } = gen.scrape(block)
            gen.Import('import smarthome')
            let code = `await smarthome.homekit_write(name=${name.code}, charact=${charact}, value=${value.code},${gen.rid(block)})\n`
            return code
        }
    }



    makecode.input_colour_check = {
        block: ['field.colour'],
        type: value,
        python: block => {
            let { colour } = gen.scrape(block)
            gen.Import('import colour_sensor')
            let code = `await ${gen.Symbol('colour_sensor.is_colour')}(${colour},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.input_colour_read = {
        block: [],
        type: value,
        python: block => {
            gen.Import('import colour_sensor')

            let { mode } = gen.scrape(block)

            let code = `await ${gen.Symbol('colour_sensor.read_colour')}(${gen.enum('colour_sensor', mode)}, ${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }

    makecode.input_rfid_callback = {
        block: ['field.port','input.HANDLER_DRAG_PARAM_card', 'statement.HANDLER'],
        type: event,
        python: block => {
            let { HANDLER, card, port } = gen.scrape(block)
            let object = gen.object_name('rfid', port)
            gen.Import('import rfid')
            gen.Static(`${object}=rfid.PN532_UART(${port_map[port]})`)
            gen.Setup(`await ${object}.begin()\n`)
            let function_name = gen.fname(block, object, 'callback')
            let function_symbol = gen.Symbol(`fn_${gen.safe(function_name.substring(1, function_name.length - 1))}`)


            // let agsList = []
            // let mappingList = []
            // for (var inp of block.inputList) {
            //     if (inp.type != Blockly.INPUT_VALUE) continue
            //     let variableName = inp.connection.targetConnection.sourceBlock_.inputList[0].fieldRow[0].value_;
            //     agsList.push(variableName) // this is the variable name that will be placed as argument
            // }
            // let localArgList = []
            // agsList.forEach(variableName => {
            //     let localName = '__' + gen.safe(variableName)
            //     let globalName = gen.safe(variableName)
            //     localArgList.push(localName);
            //     mappingList.push(`${globalName}=${localName}`)
            // })
            // let argString = 'card'
            // let mapString = mappingList.join(';')


            // gen.Task(task)
            // let varstring = `global ${gen.Symbol('usr_card')};${gen.Symbol('usr_card')}=card\n`
            let code = `async def ${function_symbol}():\n${getVarString(block)}\n${HANDLER}\n`
            
            gen.Task(code)
            gen.Setup(`await ${object}.callback(${function_symbol},${gen.rid(block)})\n`)
        }
    }
    makecode.input_rfid_read = {
        block: ['field.port'],
        type: value,
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('rfid', port)
            gen.Import('import rfid')
            gen.Static(`${object}=rfid.PN532_UART(${port_map[port]})`)
            gen.Setup(`await ${object}.begin()\n`)
            
            let code = `await ${gen.Symbol(`${object}.read_card`)}(${gen.rid(block)})`

            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }
    makecode.input_rfid_check = {
        block: ['field.port'],
        type: value,
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('rfid', port)
            gen.Import('import rfid')
            gen.Static(`${object}=rfid.PN532_UART(${port_map[port]})`)
            gen.Setup(`await ${object}.begin()\n`)
            
            let code = `await ${gen.Symbol(`${object}.is_detected`)}(${gen.rid(block)})`

            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }

    makecode.output_mp3_isPlaying = {
        block: ['field.port'],
        type: value,
        python: block => {
            let { port } = gen.scrape(block)
            let object = gen.object_name('mp3', port)
            gen.Import('import mp3')
            gen.Static(`${object}=mp3.DFPlayer(${port_map[port]})`)
            gen.Setup(`await ${object}.begin()\n`)

            let code = `await ${gen.Symbol(`${object}.is_playing`)}(${gen.rid(block)})`

            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }

    makecode.output_mp3_play = {
        block: ['field.port', 'input.file'],
        type: action,
        python: block => {
            let { port, file } = gen.scrape(block)
            let object = gen.object_name('mp3', port)
            gen.Import('import mp3')
            gen.Static(`${object}=mp3.DFPlayer(${port_map[port]})`)
            gen.Setup(`await ${object}.begin()\n`)

            let code = `await ${gen.Symbol(`${object}.play`)}(${file.code},${gen.rid(block)})\n`
            return code
        }
    }

    makecode.output_mp3_stop = {
        block: ['field.port'],
        type: action,
        python: block => {
            let { port, file } = gen.scrape(block)
            let object = gen.object_name('mp3', port)
            gen.Import('import mp3')
            gen.Static(`${object}=mp3.DFPlayer(${port_map[port]})`)
            gen.Setup(`await ${object}.begin()\n`)

            let code = `await ${gen.Symbol(`${object}.stop`)}(${gen.rid(block)})\n`
            return code
        }
    }


    makecode.makecode_ml_matchimage = {
        block: ['input.HANDLER_DRAG_PARAM_matched', 'input.HANDLER_DRAG_PARAM_confidence', 'input.stream', 'input.model', 'statement.HANDLER'],
        type: action,
        python: block => {
            let { model, handler, stream, link } = gen.scrape(block)
            // map link with props.teachable
            // model = gen.escape(model.code)
            // console.log("TeachB", {model, props: makecode.props})
            // let link = makecode.props.teachable[model]

            /*
                check the type of the input field
                it 
            */
            let code = []

            // if (streamBlock.type == 'iot_read_camera') {
            //     // Processing is done on the camera cpu
            //     code = [
            //         `global usr_matched`,
            //         `global usr_confidence`,
            //         `usr_matched, usr_confidence = await tensorflow.match_image(link=${model.code}, stream=${stream.code},${gen.rid(block)})`,
            //         `if True:\n${handler}\n`
            //     ]
            // }
            // else if (streamBlock.type == 'webcam_frame') {
            link = model
            let modelParameter;
            //! IMPORTANT: Parameter stream must always be webcam
            //! Old firmware doesnt support different parameter
            //! So we must pack the data into the model string, seperated with comma
            if (stream.code ==  '"webcam"') {
                modelParameter = model.code;
            }
            else {
                // modelParameter = [model.code, stream.code].join(";");
                modelParameter = `[${model.code}, ${stream.code}]`
            }


            code = [
                `global ${gen.Symbol('usr_matched')}`,
                `global ${gen.Symbol('usr_confidence')}`,
                //! Do not change the hardcoded "webcam"
                `${gen.Symbol('usr_matched')}, ${gen.Symbol('usr_confidence')} = await ${gen.Symbol('tensorflow.match_image')}(${modelParameter},"webcam",${gen.rid(block)})`,
                `if True:\n${handler}\n`
            ].join(`\n`)
            // }

            gen.Import('import tensorflow')
            return code
        }
    }
    makecode.run_in_background = {
        block: ['statement.HANDLER'],
        type: action,
        python: block => {
            let { handler } = gen.scrape(block)
            let fname = `f${gen.safe(block.id)}`
            let task = `async def ${fname}():\n${handler}`
            gen.Task(task)
            let code = `coroutine.createTask(${fname})\n`
            return code
        }
    }
    // makecode.makecode_ml_event = {
    //     block: ['input.HANDLER_DRAG_PARAM_matched', 'input.HANDLER_DRAG_PARAM_confidence', 'input.model', 'statement.HANDLER'],
    //     type: event,
    //     python: block => {
    //         let { handle_drag_param_matched, handle_drag_param_confidence, model, handler } = gen.scrape(block)
    //         // console.log({model})
    //         let function_name = `ml_event_${gen.escape(model.code).replace('.', '')}`
    //         gen.Import('import makecode')
    //         let changeVariable = [
    //             `global usr_matched`,
    //             `global usr_confidence`,
    //             `usr_matched = _matched`,
    //             `usr_confidence = _confidence`,
    //             // `print(">>>", usr_sender, usr_message)`

    //         ].join(`\n${I}`)
    //         let code = `async def ${function_name}(_matched,_confidence):\n${I}${changeVariable}\n${handler}\n`
    //         gen.Task(code)
    //         gen.Setup(`await makecode.begin_webcam()\n`)
    //         gen.Setup(`await makecode.ml_callback(model="${gen.escape(model.code)}",callback=${function_name},${gen.rid(block)})\n`)
    //     }
    // }
    makecode.custom_model = {
        block: ['input.model'],
        type: value,
        python: block => {
            // let value = makecode.props[block.id].model
            // if (value == 0) value = '""'
            // else {
            //     value = `"${value}"`
            // }
            // return [value, ORDER_NONE]

            let prop = makecode.props[block.id].model
            console.log({ prop })


            let { model } = gen.scrape(block)
            console.log("this", gen.scrape(block))
            let code = model.code

            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.pretrained_model = {
        block: ['field.model'],
        type: value,
        python: block => {
            let { model } = gen.scrape(block)
            let code = model
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.webcam_stream = {
        block: [],
        type: value,
        python: block => {
            let { webcam } = gen.scrape(block)
            console.log("WEBCAM", webcam)
            let code = '"webcam"'
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.livestream = {
        block: ["input.streamId"],
        type: value,
        python: block => {
            let { streamid } = gen.scrape(block)
            window.scrape = gen.scrape(block)
            let token = streamid.code
            let code = gen.Symbol(`"ls::"+${token}`)
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.webcam_frame = makecode.webcam_stream


    makecode.iot_check_sound_button = {
        block: ['field.port'],
        type: value,
        python: block => {
            let { port } = gen.scrape(block)
            gen.Import('import microphone')
            let object = gen.object_name('microphone', port)
            gen.Static(`${object} = microphone.Microphone(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.check_button(${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.iot_read_sound = {
        block: ['field.port', 'input.time'],
        type: value,
        python: block => {
            let { port, time } = gen.scrape(block)
            let object = gen.object_name('microphone', port)
            gen.Import('import microphone')
            gen.Static(`${object} = microphone.Microphone(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.transcribe(${time.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.iot_record_sound = {
        block: ['field.port', 'input.time'],
        type: value,
        python: block => {
            let { port, time } = gen.scrape(block)
            let object = gen.object_name('microphone', port)
            gen.Import('import microphone')
            gen.Static(`${object} = microphone.Microphone(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.record(${time.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.cloud_teachable_image = {
        block: ['field.model', 'input.image'],
        type: value,
        python: block => {
            let { model, image } = gen.scrape(block)
            gen.Import('import cloud')
            if (image.code === undefined) image.code = 'None'
            let code = `await cloud.teachable(blockId="${block.id}", model=${model}, sample=${image.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.makecode_ml_query = {
        block: ['input.model', 'input.confidence'],
        type: value,
        python: block => {
            let { model, confidence } = gen.scrape(block)
            gen.Import('import makecode')
            let code = `await makecode.match_webcam(model=${model.code},confidence=${confidence.code},${gen.rid(block)})\n`
            return [JSON.stringify({
                code: code, static: [], precode: [],
            }), ORDER_NONE]
        }
    }
    makecode.Cloud_RunOnLambda = {
        block: ['input.fname', 'input.arg1', 'input.arg2', 'input.arg3', 'input.arg4', 'input.arg5', 'input.arg6'],
        type: value,
        python: block => {
            let { fname, arg1, arg2, arg3, arg4, arg5, arg6 } = gen.scrape(block)
            // fname = block.getFieldValue('fname')
            gen.Import('import cloud')
            arg1.code = arg1.code || 'None'
            arg2.code = arg2.code || 'None'
            arg3.code = arg3.code || 'None'
            arg4.code = arg4.code || 'None'
            arg5.code = arg5.code || 'None'
            arg6.code = arg6.code || 'None'
            gen.Import('import cloud')
            gen.Setup('await cloud.authenticate()\n')
            console.warn('makecode', makecode)
            let code = `await cloud.trigger("${makecode.sketchId}", ${fname.code}, [${arg1.code},${arg2.code},${arg3.code},${arg4.code},${arg5.code},${arg6.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.iot_speaker_say = {
        block: ['field.port', 'input.text', 'field.voice'],
        type: action,
        python: block => {
            let { port, text, voice } = gen.scrape(block)
            // let text = block.getFieldValue('text')
            let object = gen.object_name('speaker', port)
            gen.Import('import speaker')
            gen.Static(`${object} = speaker.Speaker(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            return `await ${object}.say(${text.code}, ${gen.enum('speaker', voice)},${gen.rid(block)})\n`
        }
    }
    makecode.iot_speaker_stop = {
        block: ['field.port'],
        type: action,
        python: block => {
            let { port } = gen.scrape(block)
            // let text = block.getFieldValue('text')
            let object = gen.object_name('speaker', port)
            gen.Import('import speaker')
            gen.Static(`${object} = speaker.Speaker(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            return `await ${object}.stop(${gen.rid(block)})\n`
        }
    }
    makecode.iot_speaker_play = {
        block: ['field.port', 'input.sound', 'input.start', 'input.stop'],
        type: action,
        python: block => {
            let { port, sound, start, stop } = gen.scrape(block)
            // let text = block.getFieldValue('text')
            let object = gen.object_name('speaker', port)
            gen.Import('import speaker')
            gen.Static(`${object} = speaker.Speaker(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            if (sound.code === undefined) sound.code = 'None'
            return `await ${object}.play(url=${sound.code},start=${start.code},stop=${stop.code},${gen.rid(block)})\n`
        }
    }
    makecode.gb_input = {
        block: ['input.text'],
        type: value,
        python: block => {
            let { text } = gen.scrape(block)
            text.code = text.code || "";
            gen.Import('import garablock')
            return [JSON.stringify({
                code: `await garablock.input(${text.code},${gen.rid(block)})`,
                static: [],
                precode: []
            }), ORDER_NONE]

        }
    }
    makecode.gb_noti = {
        block: ['input.text'],
        type: action,
        python: block => {
            let { text } = gen.scrape(block)
            window.gbnoti = block
            text.code = text.code || "";
            gen.Import('import garablock')
            let code = `await garablock.show_status(${text.code},${gen.rid(block)})\n`
            return code
            // return 
            //     code: ,
            //     static: [],
            //     precode: []
            // }), ORDER_NONE]

        }
    }
    makecode.gb_say_multiple = {
        block: ['input.text'],
        type: action,
        python: block => {
            let { text } = gen.scrape(block);
            gen.Import('import garablock')

            return `await garablock.say(${text.code},${gen.rid(block)})\n`

        }
    }
    makecode.iot_speaker_say_multiple = {
        block: ['field.port', 'field.voice', 'input.arg1', 'input.arg2', 'input.arg3', 'input.arg4', 'input.arg5', 'input.arg6'],
        type: action,
        python: block => {
            let { port, voice, arg1, arg2, arg3, arg4, arg5, arg6 } = gen.scrape(block)
            // fname = block.getFieldValue('fname')
            let object = gen.object_name('speaker', port)
            arg1.code = arg1.code || 'None'
            arg2.code = arg2.code || 'None'
            arg3.code = arg3.code || 'None'
            arg4.code = arg4.code || 'None'
            arg5.code = arg5.code || 'None'
            arg6.code = arg6.code || 'None'
            gen.Import('import speaker')
            gen.Static(`${object} = speaker.Speaker(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.say(voice=${gen.enum('speaker', voice)}, text=[${arg1.code},${arg2.code},${arg3.code},${arg4.code},${arg5.code},${arg6.code}],${gen.rid(block)})\n`
            // return [JSON.stringify({
            //     code: code, static: [], precode:[]
            // }), ORDER_NONE]
            return code
        }
    }
    makecode.iot_speaker_say_multiple_intl = {
        block: ['field.port', 'field.voice', 'input.arg1', 'input.arg2', 'input.arg3', 'input.arg4', 'input.arg5', 'input.arg6'],
        type: action,
        python: block => {
            let { port, voice, arg1, arg2, arg3, arg4, arg5, arg6 } = gen.scrape(block)
            // fname = block.getFieldValue('fname')
            let object = gen.object_name('speaker', port)
            arg1.code = arg1.code || 'None'
            arg2.code = arg2.code || 'None'
            arg3.code = arg3.code || 'None'
            arg4.code = arg4.code || 'None'
            arg5.code = arg5.code || 'None'
            arg6.code = arg6.code || 'None'
            gen.Import('import speaker')
            gen.Static(`${object} = speaker.Speaker(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            let code = `await ${object}.say(voice=${gen.enum('speaker', voice)}, text=[${arg1.code},${arg2.code},${arg3.code},${arg4.code},${arg5.code},${arg6.code}],${gen.rid(block)})\n`
            // return [JSON.stringify({
            //     code: code, static: [], precode:[]
            // }), ORDER_NONE]
            return code
        }
    }
    makecode.input_potswitch_checkbutton = {
        block: ['statement.HANDLER', 'field.port', 'field.event'],
        type: event,
        arduino: block => {
            let { handler, port, event } = gen.scrape(block)
            port = gen.escape(port).split(".")[1]
            event = `button::${gen.escape(event).split(".")[1]}`
            let code = ''
            let precode = []
            let task = `module_button_${port}`
            if (gen.isInteractive) {
                handler = Blockly.Arduino.prefixLines(handler, I)
                gen.Loop(`${task}.runCoroutine();\n`)
                gen.Loop(`button::loop();\n`)
                gen.Import(`#include "module/button.h"`)
                // gen.Import(`#include "kernel/machine.h"`)
                gen.Setup(`button::setup(${port});\n`)
                code = `task(${task}){\n${I}forever(){\n${I}${I}await(button::checkevent(${gen.event(event)}, ${gen.bid(block)}));\n${handler}${I}${I}interactive::endloop(${gen.bid(block)});\n${I}}\n}`
            }
            gen.Task(code)
        },
        python: block => {
            // while (true){console.log("ha")}
            let { HANDLER, port, event } = gen.scrape(block)
            let object = gen.object_name('potswitch', port)
            gen.Import(`import potswitch`)
            gen.Static(`${object} = potswitch.PotSwitch(${port_map[port]}${gen.tar(block)})`)
            gen.Setup(`await ${object}.begin()\n`)
            // let fname = `${object}_${gen.event(event)}`
            // fname = gen.fname(block,object, event)
            let fname = gen.fname(block, object, event)
            let task = `async def ${fname}():\n${HANDLER}\n`
            // con
            gen.Task(task)
            gen.Setup(`await ${object}.callback(${gen.enum('potswitch', event)},${fname},${gen.rid(block)})\n`)
        }
    }
    makecode.input_potswitch_readpot = {
    }
    // Legacy Blocks of Makecode
    makecode.stringFromCharCode = {
        block: ['input.code'],
        type: value,
        python: block => {
            let { code } = gen.scrape(block)
            gen.Import('import text')
            code = `await text.stringFromCharCode(${code.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.variable_to_text = {
        block: ['input.value'],
        type: value,
        python: block => {
            let { value } = gen.scrape(block)
            gen.Import('import text')
            let code = `await text.variable_to_text(${value.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.string_get = {
        block: ['input.this', 'input.pos'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let THIS = scrape['this']
            let pos = scrape['pos']
            gen.Import('import text')
            let code = `await text.string_get(${THIS.code}, ${pos.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.string_compare = {
        block: ['input.this', 'input.that'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let THIS = scrape['this']
            let that = scrape['that']
            gen.Import('import text')
            let code = `await text.string_compare(${THIS.code}, ${that.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.string_substr = {
        block: ['input.this', 'input.start', 'input.length'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let THIS = scrape['this']
            let start = scrape['start']
            let length = scrape['length']
            gen.Import('import text')
            let code = `await text.string_substr(${THIS.code}, ${start.code}, ${length.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.string_isempty = {
        block: ['input.this'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let THIS = scrape['this']
            gen.Import('import text')
            let code = `await text.string_isempty(${THIS.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.string_indexof = {
        block: ['input.this', 'input.searchValue'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let THIS = scrape['this']
            let searchValue = scrape['searchvalue']
            gen.Import('import text')
            let code = `await text.string_indexof(${THIS.code}, ${searchValue.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.string_includes = {
        block: ['input.this', 'input.searchValue'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let THIS = scrape['THIS']
            let searchValue = scrape.searchvalue
            gen.Import('import text')
            console.log({ scrape })
            let code = `await text.string_includes(${THIS.code}, ${searchValue.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.string_split = {
        block: ['input.this', 'input.separator'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let THIS = scrape['this']
            let separator = scrape['separator']
            gen.Import('import text')
            let code = `await text.string_split(${THIS.code}, ${separator.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.string_parsefloat = {
        block: ['input.text'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let text = scrape['text']
            gen.Import('import text')
            let code = `await text.string_parsefloat(${text.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.text_length = {
        block: ['input.VALUE'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let VALUE = scrape['VALUE']
            gen.Import('import text')
            let code = `await text.text_length(${VALUE.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.text_join = {
        block: ['input.text', 'input.ADD0', 'input.ADD1', 'input.ADD2', 'input.ADD3', 'input.ADD4', 'input.ADD5'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            let text = scrape['text']
            gen.Import('import text')
            let { add0, add1, add2, add3, add4, add5 } = scrape
            add0.code = add0.code || 'None'
            add1.code = add1.code || 'None'
            add2.code = add2.code || 'None'
            add3.code = add3.code || 'None'
            add4.code = add4.code || 'None'
            add5.code = add5.code || 'None'
            let code = `await text.text_join([${add0.code},${add1.code},${add2.code},${add3.code},${add4.code},${add5.code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.lists_create_with = {
        block: ['input.ADD0', 'input.ADD1', 'input.ADD2', 'input.ADD3', 'input.ADD4', 'input.ADD5'],
        type: value,
        python: block => {
            let scrape = gen.scrape(block)
            gen.Import('import array')
            let { add0, add1, add2, add3, add4, add5 } = scrape

            // make sure these are set


            let add0_code = add0?.code || 'None'
            let add1_code = add1?.code || 'None'
            let add2_code = add2?.code || 'None'
            let add3_code = add3?.code || 'None'
            let add4_code = add4?.code || 'None'
            let add5_code = add5?.code || 'None'

            // list create with must be length aware

            let params = []
            add0 && params.push(add0.code)
            add1 && params.push(add1.code)
            add2 && params.push(add2.code)
            add3 && params.push(add3.code)
            add4 && params.push(add4.code)
            add5 && params.push(add5.code)


            let code = `await ${gen.Symbol('array.lists_create_with')}([${params}],${gen.rid(block)})`


            // let code = `await array.lists_create_with([${add0_code},${add1_code},${add2_code},${add3_code},${add4_code},${add5_code}],${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.lists_length = {
        block: ['input.VALUE'],
        type: value,
        python: block => {
            let { VALUE } = gen.scrape(block)
            gen.Import('import array')
            // let code = `await ${gen.Symbol('array.lists_length')}(${VALUE.code},${gen.rid(block)})`
            let code = `len(${VALUE.code})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.lists_index_get = {
        block: ['input.LIST', 'input.INDEX'],
        type: value,
        python: block => {
            let { LIST, INDEX } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.lists_index_get')}(${LIST.code}, ${INDEX.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.lists_index_set = {
        block: ['input.LIST', 'input.INDEX', 'input.VALUE'],
        type: action,
        python: block => {
            let { LIST, INDEX, VALUE } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.lists_index_set')}(${LIST.code}, ${INDEX.code}, ${VALUE.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.array_removeat = {
        block: ['input.list', 'input.index'],
        type: value,
        python: block => {
            let { list, index } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_removeat')}(${list.code}, ${index.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.array_insertAt = {
        block: ['input.list', 'input.index', 'input.value'],
        type: action,
        python: block => {
            let { list, index, value } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_insertAt')}(${list.code}, ${index.code}, ${value.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.array_removeat_statement = {
        block: ['input.list', 'input.index'],
        type: action,
        python: block => {
            let { list, index } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_removeat_statement')}(${list.code}, ${index.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.array_pop = {
        block: ['input.list'],
        type: value,
        python: block => {
            let { list } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_pop')}(${list.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.array_unshift = {
        block: ['input.list', 'input.value'],
        type: value,
        python: block => {
            let { list, value } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_unshift')}(${list.code}, ${value.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.array_push = {
        block: ['input.list', 'input.value'],
        type: action,
        python: block => {
            let { list, value } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_push')}(${list.code}, ${value.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.array_pop_statement = {
        block: ['input.list'],
        type: action,
        python: block => {
            let { list } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_pop_statement')}(${list.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.array_unshift_statement = {
        block: ['input.list', 'input.value'],
        type: action,
        python: block => {
            let { list, value } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_unshift_statement')}(${list.code}, ${value.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.array_shift = {
        block: ['input.list'],
        type: value,
        python: block => {
            let { list } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_shift')}(${list.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.array_shift_statement = {
        block: ['input.list'],
        type: action,
        python: block => {
            let { list } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_shift_statement')}(${list.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.array_pickRandom = {
        block: ['input.list'],
        type: value,
        python: block => {
            let { list } = gen.scrape(block)
            gen.Import('import array')
            let code = `await ${gen.Symbol('array.array_pickRandom')}(${list.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.array_reverse = {
        block: ['input.list'],
        type: action,
        python: block => {
            let { list } = gen.scrape(block)
            gen.Import('import array')
            let code = `await array.array_reverse(${list.code},${gen.rid(block)})`
            return code
        }
    }
    makecode.array_indexof = {
        block: ['input.list', 'input.value'],
        type: value,
        python: block => {
            let { list, value } = gen.scrape(block)
            gen.Import('import array')
            let code = `await array.array_indexof(${list.code}, ${value.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        },
        javascript: block => {
            let { list, value } = gen.scrape(block)

        }
    }

    makecode.homekit_createAccessory = {
        block: ['field.type', 'input.name'],
        type: value,
        python: block => {
            let { type, name } = gen.scrape(block)
            type = gen.escape(type.replace('AccessoryType', 'apple_homekit.homekit.Accessory'))
            gen.Import('import apple_homekit')
            let code = `apple_homekit.Accessory(type=${type},name=${name.code})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        }
    }
    makecode.homekit_createService = {
        block: ['field.type', 'input.name', 'input.this'],
        type: value,
        python: block => {
            let scraped = gen.scrape(block)
            let { type, name } = scraped
            let THIS = scraped['this']
            type = gen.escape(type.replace('ServiceType', 'apple_homekit.homekit.Service'))
            gen.Import('import apple_homekit')
            let code = `apple_homekit.Service(type=${type},name=${name.code},accessory=${THIS.code})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        }
    }
    makecode.homekit_createCharacteristic = {
        block: ['field.type', 'input.this'],
        type: value,
        python: block => {
            let scraped = gen.scrape(block)
            let { type } = scraped
            let THIS = scraped['this']
            type = gen.escape(type.replace('CharacteristicType', 'apple_homekit.homekit.Charact'))
            gen.Import('import apple_homekit')
            let code = `apple_homekit.Charact(type=${type},service=${THIS.code})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        }
    }
    makecode.homekit_updateCharacteristic = {
        block: ['input.this', 'input.value'],
        type: action,
        python: block => {
            let scraped = gen.scrape(block)
            let { value } = scraped
            let THIS = scraped['this']
            gen.Import('import apple_homekit')
            let code = `await apple_homekit.updateCharacteristic(charact=${THIS.code},value=${value.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.homekit_setUnit = {
        block: ['input.this', 'field.unit'],
        type: action,
        python: block => {
            let scraped = gen.scrape(block)
            let { unit } = scraped
            let THIS = scraped['this']
            gen.Import('import apple_homekit')
            // PropertyUnit.UNIT_CELSIUS
            let code = `await apple_homekit.setUnit(charact=${THIS.code},unit=${unit},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.homekit_setvarraint = {
        block: ['input.this', 'input.min', 'input.max'],
        type: action,
        python: block => {
            let scraped = gen.scrape(block)
            let { min, max } = scraped
            let THIS = scraped['this']
            gen.Import('import apple_homekit')
            let code = `await apple_homekit.setvarraint(charact=${THIS.code},min=${min.code},max=${max.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.homekit_wrapConfig = {
        block: ['statement.HANDLER'],
        type: action,
        python: block => {
            let { handler } = gen.scrape(block)
            gen.Import('import apple_homekit')
            // let code = `await apple_homekit.start(${gen.rid(block)})\n`
            // return code
            let code = `async def _setupHomekit():\n${I}async with apple_homekit.setup():\n${Blockly.Python.prefixLines(handler, I)}`
            gen.Task(code)
            gen.Setup('await _setupHomekit()\n')
        }
    }
    makecode.homekit_getCharacteristic = {
        block: ['field.type', 'input.name', 'input.this'],
        type: value,
        python: block => {
            let scraped = gen.scrape(block)
            // let { type, name } = scraped
            let THIS = scraped['this']
            gen.Import('import apple_homekit')
            let code = `await apple_homekit.getCharacteristic(charact=${THIS.code},${gen.rid(block)})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]
        }
    }
    /*
    makecode.cloud_handle_messenger = {
        block: ['input.HANDLER_DRAG_PARAM_message', 'input.HANDLER_DRAG_PARAM_sender', 'statement.HANDLER'],
        type: event,
        python: block => {
            let { handle_drag_param_message, handler } = gen.scrape(block)
            gen.Import('import messenger')
            let function_name = 'handle_messenger'
            let changeVariable = [
                `global usr_message`,
                `global usr_sender`,
                `usr_message = _message`,
                `usr_sender = _sender`,
                `print(">>>", usr_sender, usr_message)`
    
            ].join(`\n${I}`)
            let code = `async def ${function_name}(_message,_sender):\n${I}${changeVariable}\n${handler}\n`
            gen.Task(code)
            gen.Setup(`await messenger.callback(None, ${function_name},${gen.rid(block)})\n`)
        }
    }
    */
    makecode.homekit_onCharacteristicUpdate = {
        block: ['input.this', 'input.HANDLER_DRAG_PARAM_value', 'statement.HANDLER'],
        type: event,
        python: block => {
            let scraped = gen.scrape(block)
            let { handle_drag_param_value, handler } = scraped
            let THIS = scraped['this']
            gen.Import('import apple_homekit')
            let propertyName = block.getInputTargetBlock('this')
            let function_name = `handle_property_${gen.safe(block.getInputTargetBlock('this').id)}`
            let subcode = [
                `global usr_value`,
                `usr_value = _value`
            ].join(`\n${I}`)
            let code = `async def ${function_name}(_value):\n${I}${subcode}\n${handler}\n`

            gen.Task(code)
            gen.Setup(`await apple_homekit.onCharacteristicUpdate(charact=${THIS.code},callback=${function_name},${gen.rid(block)})\n`)
        }

    }

    makecode.grobot_set_state_location = {
        block: ['field.location'],
        type: action,
        python: block => {
            let { location } = gen.scrape(block)
            gen.Import('import variable')
            let code = `await variable.set_location(${location},${gen.rid(block)})`
            return code
        }
    }


    makecode.colorindexpicker = {
        block: ['field.color'],
        type: value,
        python: block => {
            // let { color } = gen.scrape(block)
            let color = makecode.props[block.id].color
            if (value == 0) value = '""'
            else {
                value = `"${value}"`
            }
            return [value, ORDER_NONE]
            let code = `${color}`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.scenescreenwidth = {
        block: [],
        type: value,
        python: block => {
            let code = '320'

            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }

    makecode.scenescreenheight = {
        block: [],
        type: value,
        python: block => {
            let code = '240'

            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.gamesetbackgroundcolor = {
        block: ['input.color'],
        type: action,
        python: block => {
            let { color } = gen.scrape(block)
            gen.Import('import scene\n')
            let code = `await scene.gamesetbackgroundcolor(${color.code},${gen.rid(block)})\n`
            return code
        }
    }

    makecode.spritescreate = {
        block: ['input.img', 'input.kind'],
        type: value,
        python: block => {
            let { img, kind } = gen.scrape(block)
            gen.Import('import sprite\n')
            let code = `await sprite.spritescreate(img=${img.code},kind=${kind.code},${gen.rid(block)})\n`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]

        }
    }
    makecode.screen_image_picker = {
        block: ['field.img'],
        type: value,
        python: block => {
            let { img } = gen.scrape(block)
            gen.Import('import sprite\n')
            let code = `await sprite.screen_image_picker('''${gen.escape(img)}''',${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.spritekind = {
        block: ['field.MEMBER'],
        type: value,
        python: block => {
            let { member } = gen.scrape(block)
            gen.Import('import sprite\n')
            let code = `await sprite.spritekind(${member},${gen.rid(block)})`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]
        }
    }
    makecode.spritesetvel = {
        block: ['input.sprite', 'input.vx', 'input.vy'],
        type: action,
        python: block => {
            let { sprite, vx, vy } = gen.scrape(block)
            gen.Import('import sprite\n')
            let code = `await sprite.spritesetvel(${sprite.code},${vx.code},${vy.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.spritesetpos = {
        block: ['input.sprite', 'input.x', 'input.y'],
        type: action,
        python: block => {
            let { sprite, x, y } = gen.scrape(block)
            gen.Import('import sprite\n')
            let code = `await sprite.spritesetpos(${sprite.code},${x.code},${y.code},${gen.rid(block)})\n`
            return code
        }
    }
    makecode.spriteSpeedPicker = {
        block: ['field.speed'],
        type: value,
        python: block => {
            let { speed } = gen.scrape(block)
            let code = `${speed}`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]

        }
    }
    makecode.positionPicker = {
        block: ['field.index'],
        type: value,
        python: block => {
            let { index } = gen.scrape(block)
            let code = `${index}`
            return [JSON.stringify({
                code: code, static: [], precode: []
            }), ORDER_NONE]

        }
    }
    makecode.Sprite_blockCombine_set = {
        block: ['field.property', 'input.mySprite', 'input.value'],
        type: action,
        python: block => {
            let { property, mysprite, value } = gen.scrape(block)
            gen.Import('import sprite\n')
            let code = `await sprite.Sprite_blockCombine_set(${property}, ${mysprite.code},${value.code},${gen.rid(block)})\n`
            return code
        }
    }


    gen.grobot_ble_target = null
    makecode.grobot_ble_control = {
        block: ['input.ble', 'statement.HANDLER'],
        type: action,
        python: block => {
            /*
                be careful not to use scrape, scrape will trigger python of that block
                creating object oriented before the grobot_ble_target is set
                
            */
            gen.grobot_ble_target = gen.valueToCode(block, 'ble', Blockly.Python.ORDER_NONE)
            console.log("====== START =========")
            console.log("Target", gen.grobot_ble_target)
            let { ble, handler } = gen.scrape(block)
            let code = `if True:\n${handler}`
            console.log("====== END =========")

            gen.grobot_ble_target = null

            return code
        }
    }

    makecode.grobot_ble_query = {
        block: ['input.ble', 'input.query'],
        type: value,
        python: block => {
            gen.grobot_ble_target = gen.scrape(block).ble.code
            // let value = makecode.props[block.id].TEXT


            let { query } = gen.scrape(block)
            let code = `await `
            gen.grobot_ble_target = null

            return [JSON.stringify({
                code: code, precode: [], static: []
            }), ORDER_NONE]
        }
    }
    makecode.ble_get_rssi = {
        block: ['input.ble'],
        type: value,
        python: block => {
            let { ble } = gen.scrape(block)
            gen.Import('import bluetooth')
            let code = `await bluetooth.get_rssi(${ble.code},${gen.rid(block)})`
            return [JSON.stringify({
                code: code,
                precode: [],
                static: []
            }), ORDER_NONE]
        }
    }

    makecode.navigator_noarg_action = {
        block: ['field.action'],
        type: action,
        python: block => {
            let { action } = gen.scrape(block)
            gen.Import("import navigator")
            gen.Setup(`await navigator.setup()\n`)
            let code = `await navigator.action(${gen.enum('navigator', action)},${gen.rid(block)})\n`
            return code
        }
    }

    makecode.navigator_check_event = {
        block: ['field.event'],
        type: value,
        python: block => {
            let { event } = gen.scrape(block)
            gen.Import("import navigator")
            gen.Setup(`await navigator.setup()\n`)
            let code = `await navigator.check(${gen.enum('navigator', event)},${gen.rid(block)})`
            return [JSON.stringify({ code: code, precode: [], static: [] }), ORDER_NONE]

        }
    }

    gen.tar = (block) => {
        // Generate the target string for some of the blocks
        let scope = getExtenderScope(block);
        if (scope == null) {
            return ''
        }

        else {
            // this will bet the port name ?
            gen.Import('import extender')
            console.log(`scoped/ detected ${block.type} inside ${scope}`);
            return `,target=extender.of(board.${scope})`
        }

    }
    gen.build(MakeCode)
}


function getExtenderScope(block) {
    var parents = []
    var iter = block
    while (true) {
        var parent = iter.getSurroundParent()
        if (parent == null) break;
        if (parent.type == 'grobot_extender_scoped') {
            parents.push(parent)
        }
        iter = parent
    }
    if (parents.length == 0) return null
    return parents[0].getFieldValue("port").split(".")[1]
}



// console.log("OK")
/*

var lines = gen.workspaceToCode({workspace: Blockly.getMainWorkspace(), language: 'micropython'}).code
console.log(lines)
*/

// gen.makecode.target = 'micropython'
// var lines = gen.workspaceToCode({ workspace: Blockly.getMainWorkspace(), language: 'micropython' }).code
// console.warn(lines)