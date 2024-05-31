class Bit32 {
  constructor(value) {
    this.value = value;
    this.value = value;
  }
  toHex() {
    return parseInt(this.value, 2).toString(16).padStart(8, "0");
  }
}
class RType {
  constructor(op, func, shift = "00000", rd, rs = "00000", rt, name) {
    this.op = op;
    this.func = func;
    this.shift = shift;
    this.rd = rd;
    this.rs = rs;
    this.rt = rt;
    this.name = name;
    this.op = op;
    this.func = func;
    this.shift = shift;
    this.rd = rd;
    this.rs = rs;
    this.rt = rt;
    this.name = name;
  }
  toString() {
    return new Bit32(
      `${this.op}${this.func}${this.shift}${this.rd}${this.rs}${this.rt}`
    );
  }
  getName() {
    return this.name;
  }
}
class IType {
  constructor(op, imm, rs, rt, name) {
    this.op = op;
    this.imm = imm;
    this.rs = rs;
    this.rt = rt;
    this.name = name;
    this.op = op;
    this.imm = imm;
    this.rs = rs;
    this.rt = rt;
    this.name = name;
  }
  toString() {
    return new Bit32(`${this.op}${this.imm}${this.rs}${this.rt}`);
  }
  getName() {
    return this.name;
  }
}
class JType {
  constructor(op, addr, name) {
    this.op = op;
    this.addr = addr;
    this.name = name;
    this.op = op;
    this.addr = addr;
    this.name = name;
  }
  toString() {
    return new Bit32(`${this.op}${this.addr}`);
  }
  getName() {
    return this.name;
  }
}
class Add extends RType {
  constructor(rd, rs, rt) {
    super(
      "000000",
      "000001",
      "00000",
      parseInt(rd.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "add"
    );
  }
}
class And extends RType {
  constructor(rd, rs, rt) {
    super(
      "000001",
      "000001",
      "00000",
      parseInt(rd.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "and"
    );
  }
}
class Or extends RType {
  constructor(rd, rs, rt) {
    super(
      "000001",
      "000010",
      "00000",
      parseInt(rd.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "or"
    );
  }
}
class Xor extends RType {
  constructor(rd, rs, rt) {
    super(
      "000001",
      "000100",
      "00000",
      parseInt(rd.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "xor"
    );
  }
}
class Srl extends RType {
  constructor(rd, rt, shift) {
    super(
      "000010",
      "000010",
      parseInt(shift.slice(2), 16).toString(2).padStart(5, "0"),
      parseInt(rd.slice(1)).toString(2).padStart(5, "0"),
      "00000",
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "srl"
    );
  }
}
class Sll extends RType {
  constructor(shift, rd, rt) {
    super(
      "000010",
      "000011",
      parseInt(shift.slice(2), 16).toString(2).padStart(5, "0"),
      parseInt(rd.slice(1)).toString(2).padStart(5, "0"),
      "00000",
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "sll"
    );
  }
}
class Addi extends IType {
  constructor(rt, rs, imm) {
    super(
      "000101",
      parseInt(imm.slice(2), 16).toString(2).padStart(16, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "addi"
    );
  }
}
class Andi extends IType {
  constructor(rt, rs, imm) {
    super(
      "001001",
      parseInt(imm.slice(2), 16).toString(2).padStart(16, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "andi"
    );
  }
}
class Ori extends IType {
  constructor(rt, rs, imm) {
    super(
      "001010",
      parseInt(imm.slice(2), 16).toString(2).padStart(16, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "ori"
    );
  }
}
class Xori extends IType {
  constructor(rt, rs, imm) {
    super(
      "001100",
      parseInt(imm.slice(2), 16).toString(2).padStart(16, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "xori"
    );
  }
}
class Load extends IType {
  constructor(rt, offset, rs) {
    super(
      "001101",
      parseInt(offset.slice(2), 16).toString(2).padStart(16, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "load"
    );
  }
}
class Store extends IType {
  constructor(rt, offset, rs) {
    super(
      "001110",
      parseInt(offset.slice(2), 16).toString(2).padStart(16, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "store"
    );
  }
}
class Beq extends IType {
  constructor(index, rs, rt, imm) {
    const offset =
      parseInt(imm.slice(3), 16) - index - 1 < 0
        ? parseInt(imm.slice(3), 16) - index - 1 + Math.pow(2, 16)
        : parseInt(imm.slice(3), 16) - index - 1;
    super(
      "001111",
      offset.toString(2).padStart(16, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "beq"
    );
  }
}
class Bne extends IType {
  constructor(index, rs, rt, imm) {
    // 4*label = 4*index + 4 + offset << 2
    // offset = label - index - 1
    // 如果溢出了，那么就是label - index - 1 - 2^16
    const offset =
      parseInt(imm.slice(3), 16) - index - 1 < 0
        ? parseInt(imm.slice(3), 16) - index - 1 + Math.pow(2, 16)
        : parseInt(imm.slice(3), 16) - index - 1;
    super(
      "010000",
      offset.toString(2).padStart(16, "0"),
      parseInt(rs.slice(1)).toString(2).padStart(5, "0"),
      parseInt(rt.slice(1)).toString(2).padStart(5, "0"),
      "bne"
    );
  }
}
class Jump extends JType {
  constructor(addr) {
    super(
      "010010",
      parseInt(addr.slice(2), 16).toString(2).padStart(26, "0"),
      "jump"
    );
  }
}
export function translateMIPS2Verilog(input) {
  const verilogCode = [`assign rom[6'h00] = 32'h00000000;`];
  function addInstructionToROM(instruction) {
    verilogCode.push(
      `assign rom[6'h${verilogCode.length
        .toString(16)
        .padStart(2, "0")}] = 32'h${instruction.toString().toHex()};`
    );
  }
  for (const [index, instruction] of input.entries()) {
    const [name, ...args] = instruction.split(" ");
    const instruction_class = eval(
      name.charAt(0).toUpperCase() + name.slice(1)
    );
    if (name === "store") {
      const [rt, ...rest] = args[0].split(",");
      const [offset, rs] = rest.join(" ").split("(");
      const __reflect = new Store(rt, offset, rs.slice(0, -1));
      addInstructionToROM(__reflect);
    } else if (name === "load") {
      const [rt, ...rest] = args[0].split(",");
      const [offset, rs] = rest.join(" ").split("(");
      const __reflect = new Load(rt, offset, rs.slice(0, -1));
      addInstructionToROM(__reflect);
    } else if (name === "beq") {
      const [rs, rt, imm] = args[0].split(",");
      const __reflect = new Beq(index + 1, rs, rt, imm);
      addInstructionToROM(__reflect);
    } else if (name === "bne") {
      const [rs, rt, imm] = args[0].split(",");
      const __reflect = new Bne(index + 1, rs, rt, imm);
      addInstructionToROM(__reflect);
    } else if (name === "jump") {
      const __reflect = new Jump(args[0]);
      addInstructionToROM(__reflect);
    } else if (name === "add") {
      const [rd, ...rest] = args[0].split(",");
      const [rs, rt] = rest;
      const __reflect = new Add(rd, rs, rt);
      addInstructionToROM(__reflect);
    } else if (name === "sll") {
      const [rd, ...rest] = args[0].split(",");
      const [rt, shift] = rest;
      const __reflect = new Sll(shift, rd, rt);
      addInstructionToROM(__reflect);
    } else if (name === "srl") {
      const [rd, ...rest] = args[0].split(",");
      const [rt, shift] = rest;
      const __reflect = new Srl(rd, rt, shift);
      addInstructionToROM(__reflect);
    } else if (name === "addi") {
      const [rt, ...rest] = args[0].split(",");
      const [rs, imm] = rest;
      const __reflect = new Addi(rt, rs, imm);
      addInstructionToROM(__reflect);
    } else if (name === "and") {
      const [rd, ...rest] = args[0].split(",");
      const [rs, rt] = rest;
      const __reflect = new And(rd, rs, rt);
      addInstructionToROM(__reflect);
    } else if (name === "andi") {
      const [rt, ...rest] = args[0].split(",");
      const [rs, imm] = rest;
      const __reflect = new Andi(rt, rs, imm);
      addInstructionToROM(__reflect);
    } else if (name === "or") {
      const [rd, ...rest] = args[0].split(",");
      const [rs, rt] = rest;
      const __reflect = new Or(rd, rs, rt);
      addInstructionToROM(__reflect);
    } else if (name === "ori") {
      const [rt, ...rest] = args[0].split(",");
      const [rs, imm] = rest;
      const __reflect = new Ori(rt, rs, imm);
      addInstructionToROM(__reflect);
    } else if (name === "xor") {
      const [rd, ...rest] = args[0].split(",");
      const [rs, rt] = rest;
      const __reflect = new Xor(rd, rs, rt);
      addInstructionToROM(__reflect);
    } else if (name === "xori") {
      const [rt, ...rest] = args[0].split(",");
      const [rs, imm] = rest;
      const __reflect = new Xori(rt, rs, imm);
      addInstructionToROM(__reflect);
    }

    // } else if (name === "beq" || name === "bne") {
    //   const __reflect = Reflect.construct(instruction_class, [
    //     index,
    //     ...args[0].split(","),
    //   ]);
    //   addInstructionToROM(__reflect);
    // } else {
    //   const __reflect = Reflect.construct(
    //     instruction_class,
    //     args[0].split(",")
    //   );
    //   addInstructionToROM(__reflect);
    // }
  }
  return verilogCode;
}
