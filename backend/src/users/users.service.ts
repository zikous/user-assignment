import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(CreateUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: CreateUserDto });
  }

  async update(id: number, UpdateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: UpdateUserDto });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
