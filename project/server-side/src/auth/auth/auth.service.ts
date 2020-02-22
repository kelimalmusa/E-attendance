import { Injectable } from "@nestjs/common";
import { OgrenciService } from "src/ogrenci/ogrenci/ogrenci.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userSer: OgrenciService,
    private readonly jwtService: JwtService
  ) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userSer.findeOne(username);
    if (user && user.ogr_password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.ogr_username, sub: user.ogr_id }; //dikkat et user.username ve user.id olabilir
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
